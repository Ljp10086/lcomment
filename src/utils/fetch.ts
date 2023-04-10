export default class Fetch {
  constructor(public baseUrl) {}

  async request(input: string, init?: RequestInit) {
    const res = await fetch(`${this.baseUrl}${input}`, {
      ...init,
      credentials: 'include'
    });

    if (!res.ok) {
      return Promise.reject(await res.text());
    }

    return res;
  }

  get(input: string, init?: Omit<RequestInit, 'method'>) {
    return this.request(input, {
      ...init,
      method: 'GET'
    });
  }

  post(input: string, init?: Omit<RequestInit, 'method'>) {
    return this.request(input, {
      ...init,
      method: 'POST'
    });
  }
}
