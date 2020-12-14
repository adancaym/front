import {DaoCore, EntityCore} from '../../../../core';
import {ModelUserApi} from '..';
export class EntityUserApi extends EntityCore<ModelUserApi>{

  constructor(dao: DaoCore<ModelUserApi>, model: ModelUserApi) {
    super(dao, model);
    this.visibleField = 'email';
  }

}
