import { buildParams } from '@/helpers/url';

import type { ActiveFilters } from '../composables/useFilters';

import type { FeatureCollectionPaginated } from '@/services/types';

import EventLight, { type RawEventLight } from '@/models/EventLight';

export type EventFilterOption = {
  id: number;
  label: string;
};

export type EventFilter = {
  label: string;
  slug: string;
  options: EventFilterOption[];
};

export type EventsCollection = FeatureCollectionPaginated<RawEventLight> & {
  filters: EventFilter[];
};

export type GetEventOptions = {
  filters: ActiveFilters;
  page?: number | null;
};

export const getEvents = ({ filters, page }: GetEventOptions) => {
  const { categories, ...otherFilters } = filters;
  const params = buildParams({ ...categories, ...otherFilters, page });

  return fetch(`/api/events?${params}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json: EventsCollection) => {
      return {
        events: json.features.map((event) => new EventLight(event)),
        filters: json.filters,
        hasMore: !!json.next,
      };
    });
};
