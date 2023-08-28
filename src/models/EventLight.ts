import { dateFormatter } from '@/helpers/date';

import type { Feature } from '@/services/types';

import Model from './Model';

export enum EventStatus {
  CANCELLED = 'CANCELLED',
  SOLDOUT = 'SOLDOUT',
}

export type RawEventLight = Feature<{
  id: number;
  title: string;
  poster: {
    src: string;
    width: number;
    height: number;
  } | null;
  starts_at: string;
  ends_at: string;
  location: string | null;
  status: EventStatus | null;
  featured: boolean;
}>;

export default class EventLight extends Model<RawEventLight> {
  get id() {
    return this.model.id;
  }

  get title() {
    return this.model.title;
  }

  get poster() {
    return this.model.poster;
  }

  get startsAt() {
    return new Date(this.model.starts_at);
  }

  get startsAtFormatted() {
    return dateFormatter.format(this.startsAt);
  }

  get endsAt() {
    return new Date(this.model.ends_at);
  }

  get endsAtFormatted() {
    return dateFormatter.format(this.endsAt);
  }

  get datesFormatted() {
    if (this.model.starts_at === this.model.ends_at) {
      return this.startsAtFormatted;
    }
    if (this.startsAt.getFullYear() !== this.endsAt.getFullYear()) {
      return `Du ${this.startsAtFormatted} au ${this.endsAtFormatted}`;
    }
    if (this.startsAt.getMonth() !== this.endsAt.getMonth()) {
      return `Du ${new Intl.DateTimeFormat('fr-CH', {
        day: 'numeric',
        month: 'short',
      }).format(this.startsAt)} au ${this.endsAtFormatted}`;
    }
    return `Du ${this.startsAt.getDate()} au ${this.endsAtFormatted}`;
  }

  get location() {
    return this.model.location;
  }

  get status() {
    return this.model.status;
  }

  get featured() {
    return this.model.featured;
  }
}
