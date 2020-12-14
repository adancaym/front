import {ModelCore} from '../../../../core/model/model';

export enum roles {
  user = 'user',
  admin = 'admin',
  su = 'su'
}

export class ModelRolApi extends ModelCore{
  rol: string;
  constructor() {
    super();
    this.rol = roles.user;
  }
}
