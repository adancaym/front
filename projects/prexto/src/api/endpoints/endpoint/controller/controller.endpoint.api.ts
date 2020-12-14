import {ControllerCoreApi} from '../../../../core/controller';
import {EntityEndpointApi} from '../entity/entity.endpoint.api';
import {ModelEndpointApi} from '../model/model.endpoint.api';
import {EndpointCoreApi} from '../../../../core/endpoint';

export class ControllerEndpointApi extends ControllerCoreApi<EntityEndpointApi, ModelEndpointApi> {
  constructor() {
    const endpoint = new EndpointCoreApi<ModelEndpointApi>('endpoints');
    super(endpoint, EntityEndpointApi, ModelEndpointApi);
  }


}
