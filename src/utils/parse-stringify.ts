import qs from 'query-string';

export function parse(query: string) {
  return qs.parse(query, { arrayFormat: 'bracket', parseBooleans: true });
}

export function stringify(obj: Record<string, any>) {
  return qs.stringify(obj, { arrayFormat: 'bracket' });
}
