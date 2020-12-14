import {EntityCore} from '../../../../core/entity';
import {ModelTableApi} from '../model/model.table.api';
import {DaoCore} from '../../../../core/dao';

export class EntityTableApi extends EntityCore<ModelTableApi>{

  constructor(dao: DaoCore<ModelTableApi>, model: ModelTableApi) {
    super(dao, model);
    this.visibleField = 'table';
  }
}
