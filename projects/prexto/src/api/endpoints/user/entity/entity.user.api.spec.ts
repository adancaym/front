import {EntityUserApi} from './entity.user.api';
import {EndpointCoreApi} from '../../../../core/endpoint';
import {ModelUserApi} from '../../../models';
import {DaoCore} from '../../../../core/dao';

describe('EntityUserApi', () => {
  it('should create an instance', () => {
    expect(new EntityUserApi(
      new DaoCore<ModelUserApi>((new EndpointCoreApi(''))),
      new ModelUserApi())
    ).toBeTruthy();
  });
});
