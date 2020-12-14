import {ControllerCoreApi} from '../../../../core/controller';
import {EntitySystemPrextoProductsApi, ModelSystemPrextoProductsApi} from '..';
import {EndpointCoreApi} from '../../../../core/endpoint';

export class ControllerSystemPrextoProductsApi extends ControllerCoreApi<EntitySystemPrextoProductsApi, ModelSystemPrextoProductsApi>{
  constructor() {
    const endpoint = new EndpointCoreApi<ModelSystemPrextoProductsApi>('systemPrextoProducts/');
    super(endpoint, EntitySystemPrextoProductsApi, ModelSystemPrextoProductsApi, false);
    this.nameOfEntity = 'Producto del sistema';
    this.nameOfEntities = 'Productos del sistema';
  }

}
