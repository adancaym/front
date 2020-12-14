import {ForeignkeyModelCoreApi, ModelCore} from '../../../../core/model';
import {ControllerUserApi, EntityUserApi, ModelUserApi} from '../../user';

export class ModelPeopleApi extends ModelCore{
  curp: string;
  dependientesEconomicos: number;
  estadoCivil: string;
  isMoral: boolean;
  rfc: string;
  user: ForeignkeyModelCoreApi<ControllerUserApi, EntityUserApi, ModelUserApi>;

  constructor() {
    super();
    this.curp = '';
    this.dependientesEconomicos = 0;
    this.estadoCivil = '';
    this.isMoral = false;
    this.rfc = '';
    this.user = new ForeignkeyModelCoreApi(new ControllerUserApi());
  }

}
