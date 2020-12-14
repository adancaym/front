import { EntityCore } from './entity.core';
import { ModelCore} from '../model';
import { DaoCore } from '../dao';
import { EndpointCoreApi } from '../endpoint';

describe('EntityCore', () => {
  it('should create an instance', () => {
    const model = new ModelCore();
    const dao = new DaoCore<ModelCore>(new EndpointCoreApi<ModelCore>(''));
    expect(new EntityCore<ModelCore>(dao, model)).toBeTruthy();
  });
});
