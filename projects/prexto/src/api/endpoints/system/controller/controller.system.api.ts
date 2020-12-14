import {ControllerCoreApi} from '../../../../core/controller';
import {EntitySystemApi} from '../entity/entity.system.api';
import {ModelSystemApi} from '../model/model.system.api';
import {EndpointCoreApi} from '../../../../core/endpoint';

export class ControllerSystemApi extends ControllerCoreApi<EntitySystemApi, ModelSystemApi> {

  constructor(useIndexDb: boolean = false) {
    const endpoint = new EndpointCoreApi<ModelSystemApi>( 'systems/');
    super(endpoint, EntitySystemApi, ModelSystemApi, useIndexDb);
    this.nameOfEntity = 'Sistema';
    this.nameOfEntities = 'Sistemas';
  }
  getOneBySystemName(system: string){
    const url = this.service.getEntpoint().addSegmentUrl('getOneBySystemName/');
    return this.service
      .getEntpoint()
      .getHttp()
      .post<ModelSystemApi>(url.toString(), {system})
      .then(response => this.service.getEntpoint().returnData(response))
      .then(response => this.cast(response));
  }
}
