import { HeadersControllerCoreApi } from './headers.controller.core.api';
import {ModelCore} from '../../model/model';

describe('Headers', () => {
  it('should create an instance', () => {
    expect(new HeadersControllerCoreApi<ModelCore>(new ModelCore())).toBeTruthy();
  });
});
