import {EntitySystemApi} from './entity.system.api';
import {EndpointCoreApi} from '../../../../core/endpoint';
import {ModelSystemApi} from '../model/model.system.api';
import {DaoCore} from '../../../../core/dao';

describe('Entity', () => {
  it('should create an instance', () => {
    expect(new EntitySystemApi(
      new DaoCore<ModelSystemApi>(new EndpointCoreApi<ModelSystemApi>('')),
      new ModelSystemApi()
    )).toBeTruthy();
  });
});
