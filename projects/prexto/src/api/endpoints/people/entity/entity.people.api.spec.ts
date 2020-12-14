import {EntityPeopleApi} from './entity.people.api';
import {ModelPeopleApi} from '../../../models';
import {DaoCore} from '../../../../core/dao';
import {EndpointCoreApi} from '../../../../core/endpoint';

describe('Entity', () => {
  it('should create an instance', () => {
    expect(new EntityPeopleApi(
      new DaoCore<ModelPeopleApi>(new EndpointCoreApi<ModelPeopleApi>('')),
      new ModelPeopleApi()
    )).toBeTruthy();
  });
});
