import {ModelCore} from '../../../../core/model/model';
import {ForeignkeyModelCoreApi} from '../../../../core/model/types';
import {ControllerRolApi, EntityRolApi, ModelRolApi} from '../../rol';

export class ModelEndpointApi extends ModelCore{
  endpoints: Array<{
    base: string,
    endpoint: string,
    path: string,
    method: string,
    name: string
    enabled: boolean,
  }>;
  rol: ForeignkeyModelCoreApi<ControllerRolApi, EntityRolApi, ModelRolApi>;
  constructor() {
    super();
    this.endpoints = [];
    this.rol = new ForeignkeyModelCoreApi<ControllerRolApi, EntityRolApi, ModelRolApi>(new ControllerRolApi(), '');
  }

}
