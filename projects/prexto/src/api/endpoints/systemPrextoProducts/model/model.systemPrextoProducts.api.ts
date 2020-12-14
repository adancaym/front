import {ModelCore} from '../../../../core/model/model';
import {ForeignkeyModelCoreApi} from '../../../../core/model/types';
import {ControllerSystemApi, EntitySystemApi, ModelSystemApi} from '../../system';
import {ControllerPrextoProductApi, EntityPrextoProductApi, ModelPrextoProductApi} from '../../prextoProduct';

export class ModelSystemPrextoProductsApi extends ModelCore {
  system: ForeignkeyModelCoreApi<ControllerSystemApi, EntitySystemApi, ModelSystemApi>;
  prextoProduct: ForeignkeyModelCoreApi<ControllerPrextoProductApi, EntityPrextoProductApi, ModelPrextoProductApi>;
  active: boolean;
  constructor() {
    super();

    this.system = new ForeignkeyModelCoreApi<ControllerSystemApi, EntitySystemApi, ModelSystemApi>(
      new ControllerSystemApi(true),
      ''
    );

    this.prextoProduct = new ForeignkeyModelCoreApi<ControllerPrextoProductApi, EntityPrextoProductApi, ModelPrextoProductApi>(
      new ControllerPrextoProductApi(true), ''
    );
    this.active = false;
  }
}
