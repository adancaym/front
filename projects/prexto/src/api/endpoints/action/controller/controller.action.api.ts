import {ControllerCoreApi} from '../../../../core/controller';
import {EntityActionApi} from '../entity/entity.action.api';
import {ModelActionApi} from '../model/model.action.api';
import {EndpointCoreApi} from '../../../../core/endpoint';

export class ControllerActionApi extends ControllerCoreApi<EntityActionApi, ModelActionApi> {
  constructor() {
    const endpoint = new EndpointCoreApi<ModelActionApi>('actions/');
    super(endpoint, EntityActionApi, ModelActionApi, true);
  }
}
