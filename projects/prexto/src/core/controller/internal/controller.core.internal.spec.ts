import { ControllerCoreInternal } from './controller.core.internal';
import {EndpointCoreInternal} from '../../endpoint';

describe('ControllerCoreInternal', () => {
  it('should create an instance', () => {
    expect(new ControllerCoreInternal(
      new EndpointCoreInternal('')
    )).toBeTruthy();
  });
});

