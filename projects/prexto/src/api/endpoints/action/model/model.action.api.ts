import {ModelCore} from '../../../../core/model/model';
import {ForeignkeyModelCoreApi} from '../../../../core/model/types';
import {ControllerRolApi, EntityRolApi, ModelRolApi} from '../../rol';
import {ControllerTableApi, EntityTableApi, ModelTableApi} from '../../table';

export class ModelActionApi extends ModelCore{

  rol: ForeignkeyModelCoreApi<ControllerRolApi, EntityRolApi, ModelRolApi>;
  table: ForeignkeyModelCoreApi<ControllerTableApi, EntityTableApi, ModelTableApi>;
  action: string;
  enabled: boolean;
  constructor() {
    super();
    this.rol = new ForeignkeyModelCoreApi<ControllerRolApi, EntityRolApi, ModelRolApi>(new ControllerRolApi(), '');
    this.table = new ForeignkeyModelCoreApi<ControllerTableApi, EntityTableApi, ModelTableApi>(new ControllerTableApi(), '');
    this.action = '';
    this.enabled = false;
  }
}
