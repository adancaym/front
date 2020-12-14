import { EntityBankApi } from './entity.bank.api';
import {ModelBankApi} from '../../../models';
import {DaoCore, EndpointCoreApi} from "../../../../core";
describe('EntityBankApi', () => {
  it('should create an instance', () => {
    expect(
      new EntityBankApi(
        new DaoCore <ModelBankApi>(new EndpointCoreApi<ModelBankApi>('')),
        new ModelBankApi(),
      )
    ).toBeTruthy();
  });
});
