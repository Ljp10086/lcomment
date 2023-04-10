import { stringify } from 'qs';

export const buildUlr = (url: string, params: Record<string, unknown>) => {
  return `${url}${stringify(params, { addQueryPrefix: true })}`;
};
