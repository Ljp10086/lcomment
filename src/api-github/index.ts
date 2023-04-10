import Fetch from '../utils/fetch';

// const githubApi = new Fetch('https://api.github.com');

export default class GithubApi {
  $http: Fetch;
  state: string;
  owner: string;
  repo: string;
  clientId: string;
  clientSecret: string;

  constructor({
    baseURL = 'https://github.com',
    state,
    owner,
    repo,
    clientId,
    clientSecret
  }) {
    if (!clientSecret || !clientId)
      throw new Error('ClientId and ClientSecret is required for lcomment');

    this.$http = new Fetch(baseURL);
    this.state = state;
    this.owner = owner;
    this.repo = repo;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }
}
