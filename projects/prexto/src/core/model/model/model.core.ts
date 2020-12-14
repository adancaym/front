import {ModelAbstractCore} from './model-abstract.core';
import {PrimaryKeyModelCoreApi} from '../types';

export class ModelCore extends ModelAbstractCore {
  id: PrimaryKeyModelCoreApi;
  createdAt: Date;
  updatedAt: Date;
  constructor() {
    super();
    this.id = new PrimaryKeyModelCoreApi('');
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

}
