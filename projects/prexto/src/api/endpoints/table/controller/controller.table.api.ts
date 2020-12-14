import {ControllerCoreApi} from '../../../../core/controller';
import {EntityTableApi} from '../entity/entity.table.api';
import {ModelTableApi} from '../model/model.table.api';
import {EndpointCoreApi} from '../../../../core/endpoint';

export class ControllerTableApi extends ControllerCoreApi<EntityTableApi, ModelTableApi>{

  constructor() {
    const endpoint = new EndpointCoreApi<ModelTableApi>('tables/');
    super(endpoint, EntityTableApi, ModelTableApi, true);
    this.nameOfEntities = 'Tablas';
    this.nameOfEntity = 'Tabla';
  }

}
