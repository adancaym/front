import {ModelCore} from '../../../../core/model/model';

export class ModelSystemApi extends ModelCore {

  system: string;
  activo: boolean;
  mensajes: Array<{
    priority: string,
    text: string
  }>;

  constructor() {
    super();
    this.system = '';
    this.activo = false;
    this.mensajes = [];
  }

}
