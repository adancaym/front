import {ControllerCoreApi} from '../../../../core/controller';
import {EndpointCoreApi} from '../../../../core/endpoint';
import {EntityUserApi} from '../entity/entity.user.api';
import {ModelUserApi} from '../model/model.user.api';

export class ControllerUserApi extends ControllerCoreApi<EntityUserApi, ModelUserApi> {
  constructor(useIndexDb: boolean = false) {
    const endpoint = new EndpointCoreApi<ModelUserApi>('users/');
    super(endpoint, EntityUserApi, ModelUserApi, useIndexDb);
    this.nameOfEntity = 'Usuario';
    this.nameOfEntities = 'Usuarios';
  }

  async me(): Promise<ModelUserApi> {
    const url = this.service.getEntpoint().addSegmentUrl('me');
    return this.service
      .getEntpoint()
      .getHttp()
      .get<ModelUserApi>(url.toString(), this.service.getEntpoint().addAccessToken())
      .then(response => this.service.getEntpoint().returnData(response));
  }

  async meEntity() {
    return this.cast(await this.me());
  }
}
