import {PrimaryKeyModelCoreApi} from '../types';

export interface ModelInterfaceCore {
  id: PrimaryKeyModelCoreApi;
  updatedAt: Date;
  createdAt: Date;
}
