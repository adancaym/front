import {ModelCore} from '../../../../core/model/model';
import {ForeignkeyModelCoreApi} from '../../../../core/model/types';
import {ControllerRolApi, EntityRolApi, ModelRolApi} from '../../rol';
import {ControllerActionApi} from '../../action/controller/controller.action.api';
import {EntityActionApi} from '../../action/entity/entity.action.api';
import {ModelActionApi} from '../../action/model/model.action.api';

export class ModelPermisionApi extends ModelCore{
  permisions: Array<ForeignkeyModelCoreApi<ControllerActionApi, EntityActionApi, ModelActionApi>>;
  rol: ForeignkeyModelCoreApi<ControllerRolApi, EntityRolApi, ModelRolApi>;
  constructor() {
    super();
    this.permisions = [];
    this.rol = new ForeignkeyModelCoreApi<ControllerRolApi, EntityRolApi, ModelRolApi>(new ControllerRolApi(), '');
  }
}
