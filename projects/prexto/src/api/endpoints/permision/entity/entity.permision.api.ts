import {EntityCore} from '../../../../core/entity';
import {ModelPermisionApi} from '../model/model.permision.api';
import {DaoCore} from '../../../../core/dao';

export class EntityPermisionApi extends EntityCore<ModelPermisionApi>{
  constructor(dao: DaoCore<ModelPermisionApi>, model: ModelPermisionApi) {
    super(dao, model);
    this.visibleField = 'id';
  }
}
