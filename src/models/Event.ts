import { getHostname } from '../helpers/url';

import type { Feature } from '@/services/types';

import type { RawEventLightProps } from './EventLight';
import EventLight from './EventLight';

export type RawEventProps = RawEventLightProps & {
  summary: string | null;
  location_details: string | null;
  pricing: string | null;
  website: string | null;
  schedule: string | null;
  organizer_name: string | null;
  organizer_address: string | null;
  organizer_phone: string | null;
  organizer_email: string | null;
  organizer_website: string | null;
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

  get hasOrganizer() {
    return (
      this.organizerAddress ||
      this.organizerEmail ||
      this.organizerName ||
      this.organizerPhone ||
      this.organizerWebsite
    );
  }

  get organizerAddress() {
    return this.model.organizer_address;
  }

  get organizerEmail() {
    return this.model.organizer_email;
  }

  get organizerName() {
    return this.model.organizer_name;
  }

  get organizerPhone() {
    return this.model.organizer_phone;
  }

  get organizerWebsite() {
    return this.model.organizer_website;
  }

  get organizerWebsiteFormatted() {
    return getHostname(this.model.organizer_website);
  }

  get categories() {
    return this.model.categories;
  }
}
