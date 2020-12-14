import {EntityCore} from '../../../../core/entity';
import {ModelSystemPrextoProductsApi} from '..';
import {DaoCore} from '../../../../core/dao';

export class EntitySystemPrextoProductsApi extends EntityCore<ModelSystemPrextoProductsApi>{

constructor(dao: DaoCore<ModelSystemPrextoProductsApi>, model: ModelSystemPrextoProductsApi) {
  super(dao, model);
}
}
