import {environment} from '../../environments/environment';
import axios, {AxiosResponse, AxiosStatic} from 'axios';
import {SessionCore} from '../session';

export class EndpointCoreInternal{
  internal = environment.internal;
  baseUrl = environment.serverBaseUrl;
  protected http: AxiosStatic;
  protected session: SessionCore;
  url: URL;
  constructor(endpoint: string, baseUrl?: string, internal?: string) {
    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
    if (internal) {
      this.internal = internal;
    }
    this.session = new SessionCore();
    this.url = new URL(this.internal, this.baseUrl);
    this.url = new URL(endpoint, this.url);
    this.http = axios;
  }
  returnData(response: AxiosResponse) {
    return response.data;
  }
  addSegmentUrl(segment: string){
    return new URL(segment, this.url);
  }
  addAccessToken(url: URL){
    if (this.session.get('access_token') !== undefined){
      url = this.addQueryParamUrl(url, 'access_token', this.session.get('access_token'));
      return url;
    }
  }
  addQueryParamUrl(url: URL, key: string, value: string){
    url.searchParams.append(key, value);
    return url;
  }
  getUrl(){
    return this.url;
  }
  get(segment: string){
    return this.http
      .get(this.addAccessToken(this.addSegmentUrl(segment)).toString())
      .then(this.returnData);
  }
  post(segment: string, data, config?){
    return this.http
      .post(this.addAccessToken(this.addSegmentUrl(segment)).toString(), data, config)
      .then(this.returnData);
  }
  put(segment: string, data, config?){
    return this.http
      .put(this.addAccessToken(this.addSegmentUrl(segment)).toString(), data, config)
      .then(this.returnData);
  }
}
