import type { Feature } from '../services/types';

export default class Model<T extends Feature<unknown>> {
  model: T['properties'];

  constructor(rawModel: T) {
    this.model = rawModel.properties;
  }
}
