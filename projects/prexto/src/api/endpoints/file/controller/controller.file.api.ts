import {ControllerCoreApi, EndpointCoreApi} from '../../../../core';
import {EntityFileApi} from '../entity/entity.file.api';
import {ModelFileApi} from '../model/model.file.api';

export class ControllerFileApi extends ControllerCoreApi<EntityFileApi, ModelFileApi>{
  constructor() {
    const endpoint = new EndpointCoreApi<ModelFileApi>( 'files/');
    super(endpoint, EntityFileApi, ModelFileApi);
  }
}
