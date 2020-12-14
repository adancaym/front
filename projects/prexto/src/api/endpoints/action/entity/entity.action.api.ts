import {EntityCore} from '../../../../core/entity';
import {ModelActionApi} from '../model/model.action.api';
import {DaoCore} from '../../../../core/dao';

export class EntityActionApi extends EntityCore<ModelActionApi> {

  constructor(dao: DaoCore<ModelActionApi>, model: ModelActionApi) {
    super(dao, model);
    this.visibleField = 'id';
  }

}
