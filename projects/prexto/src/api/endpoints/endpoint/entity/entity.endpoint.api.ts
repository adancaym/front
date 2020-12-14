import {EntityCore} from '../../../../core/entity';
import {ModelEndpointApi} from '../model/model.endpoint.api';
import {DaoCore} from '../../../../core/dao';

export class EntityEndpointApi extends EntityCore<ModelEndpointApi>{


  constructor(dao: DaoCore<ModelEndpointApi>, model: ModelEndpointApi) {
    super(dao, model);
    this.visibleField = 'endpoint';
  }
}
