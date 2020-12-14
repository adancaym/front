import { ControllerCoreApi } from './controller.core.api';
import {EndpointCoreApi} from '../../endpoint';
import {ModelCore } from '../../model';
import {EntityCore} from '../../entity';

describe('Controller', () => {
  it('should create an instance', () => {
    const endpoint = new EndpointCoreApi<ModelCore>( '');
    expect(new ControllerCoreApi(endpoint, EntityCore, ModelCore)).toBeTruthy();
  });
});
