import {EntityCore} from "../../../../core/entity";
import {ModelRolApi} from "../model/model.rol.api";
import {DaoCore} from "../../../../core/dao";

export class EntityRolApi extends EntityCore<ModelRolApi>{

  constructor(dao: DaoCore<ModelRolApi>, model: ModelRolApi) {
    super(dao, model);
    this.visibleField = 'rol';
  }

}
