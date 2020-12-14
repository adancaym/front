import { DaoCore } from './dao.core';
import {ModelCore} from '../model/model';
import {EndpointCoreApi} from '../endpoint';

describe('DaoCore', () => {
  it('should create an instance', () => {
    expect(new DaoCore(
      new EndpointCoreApi<ModelCore>('')
    )).toBeTruthy();
  });
});
