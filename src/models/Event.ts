import { getHostname } from '../helpers/url';

import type { Feature } from '@/services/types';

import type { RawEventLightProps } from './EventLight';
import EventLight from './EventLight';

export type RawEventOrganizer = {
  name: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
};

export type RawEventProps = RawEventLightProps & {
  summary: string | null;
  location_details: string | null;
  pricing: string | null;
  website: string | null;
  schedule: string | null;
  organizer: RawEventOrganizer | null;
  categories: {
    [key: string]: {
      label: string;
      values: {
        id: number;
        label: string;
      }[];
    };
  } | null;
};

export type RawEvent = Feature<RawEventProps>;

export default class Event extends EventLight<RawEvent> {
  get summary() {
    return this.model.summary;
  }

  get locationDetails() {
    return this.model.location_details;
  }

  get pricing() {
    return this.model.pricing;
  }

  get website() {
    return this.model.website;
  }

  get websiteFormatted() {
    return getHostname(this.website);
  }

  get schedule() {
    return this.model.schedule;
  }

  get organizer() {
    return this.model.organizer;
  }

  get organizerWebsiteFormatted() {
    return getHostname(this.model.organizer?.website);
  }

  get categories() {
    return this.model.categories;
  }
}
