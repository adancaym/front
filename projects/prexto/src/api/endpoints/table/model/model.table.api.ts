import {ModelCore} from '../../../../core/model/model';

export class ModelTableApi extends ModelCore{
  table: string;
  tablePlural: string;
  constructor() {
    super();
    this.table = '';
    this.tablePlural = '';
  }

}
