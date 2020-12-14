import {EntityCore} from '../../../../core/entity';
import {ModelPrextoProductApi} from '../model/model.prextoProduct.api';
import {DaoCore} from '../../../../core/dao';

export class EntityPrextoProductApi extends EntityCore<ModelPrextoProductApi>{

  constructor(dao: DaoCore<ModelPrextoProductApi>, model: ModelPrextoProductApi) {
    super(dao, model);
    this.visibleField = 'nombre';
  }


}
