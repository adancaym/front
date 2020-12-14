import { EntityPermisionApi } from './entity.permision.api';
import {EndpointCoreApi} from '../../../../core/endpoint';
import {ModelPermisionApi} from '../model/model.permision.api';
import {DaoCore} from '../../../../core/dao';

describe('EntityPermisionApi', () => {
  it('should create an instance', () => {
    expect(new EntityPermisionApi(
      new DaoCore<ModelPermisionApi>(new EndpointCoreApi<ModelPermisionApi>('')),
      new ModelPermisionApi()
    )).toBeTruthy();
  });
});
