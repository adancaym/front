import {ControllerCoreApi, FieldsType} from '../../../../core/controller';
import {EntityPermisionApi} from '../entity/entity.permision.api';
import {ModelPermisionApi} from '../model/model.permision.api';
import {EndpointCoreApi} from '../../../../core/endpoint';
import {ModelUserApi} from '../../user';
import {EmailModelCoreApi, ForeignkeyModelCoreApi, PrimaryKeyModelCoreApi} from '../../../../core/model/types';
import {ControllerActionApi} from '../../action/controller/controller.action.api';
import {EntityActionApi} from '../../action/entity/entity.action.api';
import {ModelActionApi} from '../../action/model/model.action.api';

export class ControllerPermisionApi extends ControllerCoreApi<EntityPermisionApi, ModelPermisionApi> {

  controllerAction: ControllerActionApi;

  constructor() {
    const endpoint = new EndpointCoreApi<ModelPermisionApi>('permisions/');
    super(endpoint, EntityPermisionApi, ModelPermisionApi);
    this.controllerAction = new ControllerActionApi();
  }

  getOneByRolId(rolId: string) {
    const url = this.service.getEntpoint().addSegmentUrl('getOneByRolId/' + rolId);
    return this.service
      .getEntpoint()
      .getHttp()
      .get<ModelUserApi>(url.toString(), this.service.getEntpoint().addAccessToken())
      .then(response => this.service.getEntpoint().returnData(response))
      .then(model => this.cast(model));
  }

  async cast(model: ModelPermisionApi): Promise<EntityPermisionApi> {
    const castedEntity = new EntityPermisionApi(this.service.dao, Object.assign(new ModelPermisionApi()));
    for (const header of this.getNew().getHeaders()) {
      switch (header.type) {
        case FieldsType.ForeignKey.toString(): {
          await this.fillForeignKeys(castedEntity, model, header.name);
          break;
        }
        case FieldsType.PrimaryKey.toString(): {
          const primaryKey = new PrimaryKeyModelCoreApi(model[header.name]);
          castedEntity.setPropertie(header.name, primaryKey);
          break;
        }
        case FieldsType.Date.toString(): {
          const primaryKey = new Date(model[header.name]);
          castedEntity.setPropertie(header.name, primaryKey);
          break;
        }
        case FieldsType.Email.toString(): {
          const primaryKey = new EmailModelCoreApi(model[header.name]);
          castedEntity.setPropertie(header.name, primaryKey);
          break;
        }
        case FieldsType.Array.toString(): {
          const primaryKey = model[header.name];
          if (header.name === 'permisions') {
            const newarray = [];
            for (let p of primaryKey) {
              p = new ForeignkeyModelCoreApi<ControllerActionApi, EntityActionApi, ModelActionApi>(new ControllerActionApi(), p );
              p.entity = await this.controllerAction.get(p.toString());
              newarray.push(p);
            }
            castedEntity.setPropertie(header.name, newarray);
          }else {
            castedEntity.setPropertie(header.name, primaryKey);
          }
          break;
        }
        default: {
        }
      }
    }
    return castedEntity;
  }
}
