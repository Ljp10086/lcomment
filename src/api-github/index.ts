import type { ApiGithubOpts } from '@/types';
import { buildUlr } from '../utils';
import Fetch from '../utils/fetch';

export default class GithubApi {
  baseURL: string;
  $http: Fetch;
  state: string;
  owner: string;
  repo: string;
  clientId: string;
  clientSecret: string;

  constructor(opt: ApiGithubOpts) {
    const {
      baseURL = 'https://github.com',
      state,
      owner,
      repo,
      clientId,
      clientSecret
    } = opt;

    if (!clientSecret || !clientId)
      throw new Error('ClientId and ClientSecret is required for lcomment');

    this.baseURL = baseURL;
    this.$http = new Fetch(baseURL);
    this.state = state;
    this.owner = owner;
    this.repo = repo;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  login = (): void => {
    window.location.href = buildUlr(`${this.baseURL}/login/oauth/authorize`, {
      state: this.state,
      allow_signup: true,
      client_id: this.clientId,
      redirect_uri: window.location.href
    });
  };

  getAccessToken = (): void => {};
}
