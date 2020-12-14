import { EntityTableApi } from './entity.table.api';
import { ModelTableApi} from '../model/model.table.api';
import {DaoCore} from '../../../../core/dao';
import {EndpointCoreApi} from '../../../../core/endpoint';

describe('EntityTableApi', () => {
  it('should create an instance', () => {
    expect(new EntityTableApi(
      new DaoCore<ModelTableApi>(new EndpointCoreApi<ModelTableApi>(''))
      , new ModelTableApi()
    )).toBeTruthy();
  });
});
