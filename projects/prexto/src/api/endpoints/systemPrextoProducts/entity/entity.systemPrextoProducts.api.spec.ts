import { EntitySystemPrextoProductsApi } from './entity.systemPrextoProducts.api';
import {ModelSystemPrextoProductsApi} from '..';
import {DaoCore} from '../../../../core/dao';
import {EndpointCoreApi} from '../../../../core/endpoint';

describe('Entity', () => {
  it('should create an instance', () => {
    expect(new EntitySystemPrextoProductsApi(
      new DaoCore<ModelSystemPrextoProductsApi>(
        new EndpointCoreApi<ModelSystemPrextoProductsApi>('')
      ), new ModelSystemPrextoProductsApi()
    )).toBeTruthy();
  });
});
