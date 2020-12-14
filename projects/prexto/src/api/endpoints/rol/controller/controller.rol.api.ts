import {ControllerCoreApi} from '../../../../core/controller';
import {EntityRolApi} from '../entity/entity.rol.api';
import {ModelRolApi} from '../model/model.rol.api';
import {EndpointCoreApi} from '../../../../core/endpoint';
import {tick} from '@angular/core/testing';

export class ControllerRolApi extends ControllerCoreApi<EntityRolApi, ModelRolApi>{

  constructor() {
    const endpoint = new EndpointCoreApi<ModelRolApi>('rols/');
    super(endpoint, EntityRolApi, ModelRolApi, true);
    this.nameOfEntity = 'Rol';
    this.nameOfEntities = 'Roles';
  }


}
