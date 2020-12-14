import {EntityCore} from '../../../../core/entity';
import {ModelPeopleApi} from '../model/model.people.api';
import {DaoCore} from '../../../../core/dao';

export class EntityPeopleApi extends EntityCore<ModelPeopleApi>{
  constructor(dao: DaoCore<ModelPeopleApi>, model: ModelPeopleApi) {
    super(dao, model);
    this.visibleField = 'rfc';
  }
}
