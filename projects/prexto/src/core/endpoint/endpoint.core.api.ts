import axios, {AxiosResponse, AxiosStatic} from 'axios';
import {SessionCore} from '../session';
import {environment} from '../../environments/environment';

export class EndpointCoreApi<M> {
  apiVersion = environment.apiVersion;
  baseUrl = environment.serverBaseUrl;
  url: URL;
  protected http: AxiosStatic;
  protected session: SessionCore;

  constructor(public endpoint: string, baseUrl?: string, apiVersion?: string) {
    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
    if (apiVersion) {
      this.apiVersion = apiVersion;
    }
    this.session = new SessionCore();
    this.url = new URL(this.apiVersion, this.baseUrl);
    this.url = new URL(endpoint, this.url);
    this.http = axios;
  }

  getHttp() {
    return this.http;
  }

  returnData(response: AxiosResponse): M {
    return response.data;
  }

  returnArrayData(response: AxiosResponse): Array<M> {
    return response.data;
  }

  addSegmentUrl(segment: string) {
    return new URL( segment, this.url);
  }

  addAccessToken() {
    if (this.session.get('access_token') !== undefined) {
      return {
        headers: {
          Authorization: 'Bearer ' + this.session.get('access_token')
        }
      };
    }
  }

  addQueryParamUrl(url: URL, key: string, value: string) {
    url.searchParams.append(key, value);
    return url;
  }

  getUrl() {
    return this.url.toString();
  }

  list() {
    return this.http
      .get(this.url.toString(), this.addAccessToken())
      .then(this.returnArrayData);
  }

  get(id: string): Promise<M> {
    return this.http
      .get(this.addSegmentUrl(id).toString(), this.addAccessToken())
      .then(this.returnData);
  }

  delete(id: string): Promise<M> {
    return this.http
      .delete(this.addSegmentUrl(id).toString(), this.addAccessToken())
      .then(this.returnData);
  }

  create(model: M): Promise<M> {
    return this.http
      .post(this.url.toString(), model, this.addAccessToken())
      .then(this.returnData);
  }

  update(id: string, model: M): Promise<M> {
    console.log(this.url.toString());
    console.log(this.addSegmentUrl(id).toString());
    return this.http
      .put(this.addSegmentUrl(id).toString(), model, this.addAccessToken())
      .then(this.returnData);
  }
}
