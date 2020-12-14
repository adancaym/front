import { Injectable } from '@angular/core';
import {Api} from 'apiprexto/dist/Api';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrextoService{
  api: Api;
  constructor() {
    console.log('cargado');
    this.api = new Api('front', environment);
  }
}
