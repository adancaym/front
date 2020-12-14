import {EntityCore} from '../../../entity';
import {ModelCore} from '../../model';
import {ControllerCoreApi} from '../../../controller';


export class ForeignkeyModelCoreApi< C extends ControllerCoreApi<E, M>, E extends EntityCore<M>, M extends ModelCore> extends String{

  controller: C;
  entity: E;
  constructor(controller: C, value: string = '') {
    super(value);
    this.controller = controller;
    this.entity = null;
  }
  getEntity(){
    return this.entity;
  }
}
