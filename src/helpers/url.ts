import { camelToSnakeCase } from './string';

export function buildParams(
  data: Record<string, number | string | string[] | null | undefined>
) {
  const params = new URLSearchParams();

  Object.entries(data).forEach(([k, value]) => {
    const key = camelToSnakeCase(k);

    if (Array.isArray(value)) {
      value.forEach((value) => params.append(key, value.toString()));
    } else if (value !== undefined && value !== null && value !== '') {
      params.append(key, value.toString());
    }
  });

  return params.toString();
}
