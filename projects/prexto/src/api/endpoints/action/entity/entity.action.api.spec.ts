import { EntityActionApi } from './entity.action.api';
import {DaoCore} from '../../../../core/dao';
import {ModelActionApi} from '../model/model.action.api';
import {EndpointCoreApi} from '../../../../core/endpoint';

describe('EntityActionApi', () => {
  it('should create an instance', () => {
    const dao = new DaoCore(new EndpointCoreApi<ModelActionApi>(''));
    expect(new EntityActionApi(dao, new ModelActionApi())).toBeTruthy();
  });
});
