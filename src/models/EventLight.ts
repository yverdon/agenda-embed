import { humanizeDatesPair } from '@/helpers/date';

import type { Feature } from '@/services/types';

import Model from './Model';

export enum EventStatus {
  CANCELLED = 'CANCELLED',
  SOLDOUT = 'SOLDOUT',
}

export type RawEventLightProps = {
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
};

export type RawEventLight = Feature<RawEventLightProps>;

export default class EventLight<
  T extends RawEventLight = RawEventLight,
> extends Model<T> {
  get id() {
    return this.model.id;
  }

  get title() {
    return this.model.title;
  }

  get poster() {
    return this.model.poster;
  }

  get datesHumanized() {
    return humanizeDatesPair(this.model.starts_at, this.model.ends_at);
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
