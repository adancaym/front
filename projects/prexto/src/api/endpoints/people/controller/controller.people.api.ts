import {ControllerCoreApi} from '../../../../core/controller';
import {EntityPeopleApi} from '../entity/entity.people.api';
import {ModelPeopleApi} from '../model/model.people.api';
import {EndpointCoreApi} from '../../../../core/endpoint';

export class ControllerPeopleApi extends ControllerCoreApi<EntityPeopleApi, ModelPeopleApi>{

  constructor() {
    const endpoint = new EndpointCoreApi<ModelPeopleApi>( 'people/');
    super(endpoint, EntityPeopleApi, ModelPeopleApi);
    this.nameOfEntity = 'Persona';
    this.nameOfEntities = 'Personas';
  }
  findModelPeopleByUserId(userId: string){
    const url = this.service.getEntpoint().addSegmentUrl('getByIdUser/' + userId );
    return this.service
      .getEntpoint()
      .getHttp()
      .get<ModelPeopleApi>(url.toString(), this.service.getEntpoint().addAccessToken())
      .then( response => this.service.getEntpoint().returnData(response));
  }
  async findEntityPeopleByUserId(userId: string){
    return this.cast(await this.findModelPeopleByUserId(userId));
  }
}
