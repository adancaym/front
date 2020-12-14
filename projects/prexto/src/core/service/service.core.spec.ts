import { ServiceCore } from './service.core';
import {ModelCore} from '../model/model';
import {EndpointCoreApi} from '../endpoint';

describe('ServiceCore', () => {
  it('should create an instance', () => {
    expect(new ServiceCore(
      new EndpointCoreApi<ModelCore>('')
    )).toBeTruthy();
  });
});
