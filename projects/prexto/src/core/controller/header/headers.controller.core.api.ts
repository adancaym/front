import {EmailModelCoreApi, ForeignkeyModelCoreApi, PrimaryKeyModelCoreApi} from '../../model/types/';
import {HeaderControllerCoreApi} from './header.controller.core.api';
import {ModelCore} from '../../model';
import {FieldsType} from './fieldsType';
import {PasswordModelCore} from '../../model/types/password.model.core';

export class HeadersControllerCoreApi<M extends ModelCore> {
  arrayHeaders: Array<HeaderControllerCoreApi>;
  model: M;

  constructor(model: M) {
    this.model = model;
  }

  getHeaders(): Array<HeaderControllerCoreApi> {
    return Object.keys(this.model)
      .map(key => ({name: key, type: typeof this.model[key], tag: key}))

      .map(key => ({
        ...key, type: key.type === 'object' ?
          this.model[key.name] instanceof Date ?
            FieldsType.Date.toString() : key.type : key.type
      }))
      .map(key => ({
        ...key, type: key.type === 'object' ?
          this.model[key.name] instanceof PrimaryKeyModelCoreApi ?
            FieldsType.PrimaryKey.toString() : key.type : key.type
      }))

      .map(key => ({
        ...key, type: key.type === 'object' ?
          this.model[key.name] instanceof ForeignkeyModelCoreApi ?
            FieldsType.ForeignKey.toString() : key.type : key.type
      }))

      .map(key => ({
        ...key, type: key.type === 'object' ?
          this.model[key.name] instanceof EmailModelCoreApi ?
            FieldsType.Email.toString() : key.type : key.type
      }))

      .map(key => ({
        ...key, type: key.type === 'object' ?
          this.model[key.name] instanceof PasswordModelCore ?
            FieldsType.Password.toString() : key.type : key.type
      }))

      .map(key => ({
        ...key, type: key.type === 'object' ?
          Array.isArray(this.model[key.name]) ?
            FieldsType.Array.toString() : key.type : key.type
      }))

      .map(key => ({
        ...key, type: key.type === 'string' ?
          FieldsType.Text.toString() : key.type
      }))

      .map(header => new HeaderControllerCoreApi(header));
  }
}
