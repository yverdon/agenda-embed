import { API_BASE_URL } from '@/helpers/options';
import { buildParams } from '@/helpers/url';

import type { ActiveFilters } from '@/composables/useFilters';

import type { FeatureCollectionPaginated } from '@/services/types';

import Event, { type RawEvent } from '@/models/Event';
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

export type GetEventsOptions = {
  filters: ActiveFilters;
  page?: number | null;
};

export const getEvents = ({ filters, page }: GetEventsOptions) => {
  const { categories, ...otherFilters } = filters;
  const params = buildParams({ ...categories, ...otherFilters, page });

  return fetch(`${API_BASE_URL.value}/agenda?${params}`)
    .then((response) => response.json())
    .then((json: EventsCollection) => {
      return {
        events: json.features.map((event) => new EventLight(event)),
        count: json.count,
        filters: json.filters,
        hasMore: !!json.next,
      };
    });
};

export const getEvent = (id: string) => {
  return fetch(`${API_BASE_URL.value}/agenda/${id}`)
    .then((response) => response.json())
    .then((json: RawEvent) => {
      return new Event(json);
    });
};
