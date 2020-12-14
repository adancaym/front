import {DaoCore} from '../dao';
import { ModelCore} from '../model';
import {HeaderControllerCoreApi, HeadersControllerCoreApi} from '../controller/header';
import {Injectable} from '@angular/core';

export class EntityCore<M extends ModelCore> {

  headers: Array<HeaderControllerCoreApi>;
  visibleField: string;
  constructor(private dao: DaoCore<M>, protected model: M) {
    const headers = new HeadersControllerCoreApi(model);
    this.headers = headers.getHeaders();
    this.visibleField = 'id';
  }
  getHeaders() {
    const headers = new HeadersControllerCoreApi(this.model);
    return headers.getHeaders();
  }
  async save(): Promise<M> {
    this.model = this.model.id.toString() === '' ?
      await this.dao.create(this.model) : await this.dao.update(this.model);
    return this.model;
  }

  async delete(): Promise<M> {
    this.model = await this.dao.delete(this.model.id.toString());
    return this.model;
  }

  getModel(): M {
    return this.model;
  }
  getPropertie(key: string) {
    return this.getModel()[key];
  }
  setPropertie(key: string, value) {
    return this.model[key] = value;
  }
  setModel(model: M) {
    this.model = model;
  }
}
