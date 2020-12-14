import {ModelCore} from '../../../../core/model/model';

export class ModelPrextoProductApi extends ModelCore{
  nombre: string;
  slug: string;
  tratoVarsOk: boolean;
  tratoTemplateId: string;
  stpCentroCostos: string;
  stpEmpresa: string;
  tratoTemplateName: string;
  active: boolean;
  constructor() {
    super();
    this.nombre = '';
    this.slug = '';
    this.tratoVarsOk = false;
    this.tratoTemplateId = '';
    this.stpCentroCostos = '';
    this.stpEmpresa = '';
    this.tratoTemplateName = '';
    this.active = false;
  }
}
