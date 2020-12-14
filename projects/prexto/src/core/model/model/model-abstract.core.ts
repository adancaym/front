import {ModelInterfaceCore} from './model-interface.core';
import {PrimaryKeyModelCoreApi} from '../types';

export abstract class ModelAbstractCore implements ModelInterfaceCore{
  id: PrimaryKeyModelCoreApi;
  createdAt: Date;
  updatedAt: Date;
}
