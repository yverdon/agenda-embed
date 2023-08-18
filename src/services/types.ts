export interface Feature<T> {
  type: 'Feature';
  properties: T;
}

export interface FeatureCollection<T> {
  type: 'FeatureCollection';
  features: Array<T>;
}

export interface FeatureCollectionPaginated<T> extends FeatureCollection<T> {
  count: number;
  next: string | null;
  previous: string | null;
}
