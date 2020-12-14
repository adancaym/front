import {EntityCore} from '../../../../core/entity';
import {ModelSystemApi} from '../model/model.system.api';
import {DaoCore} from '../../../../core/dao';

export class EntitySystemApi extends EntityCore<ModelSystemApi> {
  constructor(dao: DaoCore<ModelSystemApi>, model: ModelSystemApi) {
    super(dao, model);
    this.visibleField = 'system';
  }
}
