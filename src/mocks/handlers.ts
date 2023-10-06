import dayjs from 'dayjs';
import cloneDeep from 'lodash-es/cloneDeep';
import {
  type DefaultBodyType,
  type MockedRequest,
  type RestHandler,
  rest,
} from 'msw';

import events from './fixtures/events';
import eventsLight from './fixtures/eventsLight';

const PAGINATION_SIZE = 8;

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get('/api/agenda', (req, res, ctx) => {
    const events = cloneDeep(eventsLight);

    /**
     * Filter out events not within date boundaries
     */
    const notBefore = req.url.searchParams.get('starts_at');
    const notAfter = req.url.searchParams.get('ends_at');

    if (notBefore) {
      events.features = events.features.filter((e) => {
        return (
          notBefore === e.properties.starts_at ||
          dayjs(e.properties.starts_at).isAfter(dayjs(notBefore))
        );
      });
    }

    if (notAfter) {
      events.features = events.features.filter((e) => {
        return (
          notAfter === e.properties.starts_at ||
          dayjs(e.properties.starts_at).isBefore(dayjs(notAfter))
        );
      });
    }

    /**
     * Paginate events
     */
    const page: number = req.url.searchParams.get('page')
      ? Number(req.url.searchParams.get('page'))
      : 1;

    const startIndex = (page - 1) * PAGINATION_SIZE;
    const endIndex = startIndex + PAGINATION_SIZE;

    events.count = events.features.length;
    events.features = events.features.slice(startIndex, endIndex);

    if (page !== 1) {
      events.previous = `/api/agenda/?page=${page - 1}`;
    }

    const totalPages = Math.ceil(events.count / PAGINATION_SIZE);

    if (page < totalPages) {
      events.next = `/api/agenda/?page=${page + 1}`;
    }

    return res(ctx.delay(300), ctx.status(200), ctx.json(events));
  }),

  rest.get('/api/agenda/:id', (req, res, ctx) => {
    const event = events.find((e) => e.properties.id === Number(req.params.id));
    if (event) {
      return res(ctx.delay(300), ctx.status(200), ctx.json(event));
    } else {
      return res(ctx.status(404));
    }
  }),
];
