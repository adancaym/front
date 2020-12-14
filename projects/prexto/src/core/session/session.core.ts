import * as Cookies from 'js-cookie';
import {CookiesStatic} from 'js-cookie';

export class SessionCore {
  cookies: CookiesStatic;
  constructor() {
    this.cookies = Cookies;
  }
  remove(key){
    this.cookies.remove(key);
  }
  set(key: string, data: string){
    this.cookies.set(key, data);
  }
  get(key: string){
    return this.cookies.get(key);
  }
  getJson(key?): any{
    return this.cookies.getJSON(key);
  }
}
