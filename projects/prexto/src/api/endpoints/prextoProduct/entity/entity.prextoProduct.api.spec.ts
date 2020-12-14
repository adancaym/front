import { EntityPrextoProductApi } from './entity.prextoProduct.api';
import {EndpointCoreApi} from '../../../../core/endpoint';
import {ModelPrextoProductApi} from '..';
import {DaoCore} from '../../../../core/dao';

describe('EntityPrextoProductApi', () => {
  it('should create an instance', () => {
    expect(new EntityPrextoProductApi(
      new DaoCore<ModelPrextoProductApi>(new EndpointCoreApi<ModelPrextoProductApi>('prextoProducts')),
      new ModelPrextoProductApi()
    )).toBeTruthy();
  });
});
