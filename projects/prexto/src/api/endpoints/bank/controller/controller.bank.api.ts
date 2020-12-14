import {ControllerCoreApi, EndpointCoreApi} from '../../../../core';
import {EntityBankApi} from '../entity/entity.bank.api';
import {ModelBankApi} from '../model/model.bank.api';

export class ControllerBankApi extends ControllerCoreApi<EntityBankApi, ModelBankApi> {
  constructor() {
    const endpoint = new EndpointCoreApi<ModelBankApi>( 'banks/');
    super(endpoint, EntityBankApi, ModelBankApi);
  }

}
