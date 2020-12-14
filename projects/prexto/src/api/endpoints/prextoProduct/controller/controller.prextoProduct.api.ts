import {ControllerCoreApi} from '../../../../core/controller';
import {EntityPrextoProductApi} from '../entity/entity.prextoProduct.api';
import {ModelPrextoProductApi} from '../model/model.prextoProduct.api';
import {EndpointCoreApi} from '../../../../core/endpoint';

export class ControllerPrextoProductApi  extends ControllerCoreApi<EntityPrextoProductApi, ModelPrextoProductApi>{

  constructor(useIndexDb: boolean = false) {
    const endpoint = new EndpointCoreApi<ModelPrextoProductApi>('prextoProducts/');
    super(endpoint, EntityPrextoProductApi, ModelPrextoProductApi, useIndexDb);
    this.nameOfEntity = 'Producto prexto';
    this.nameOfEntities = 'Productos prexto';
  }

}
