import {EmailModelCoreApi, ForeignkeyModelCoreApi, ModelCore} from '../../../../core';
import {EntitySystemApi, ModelSystemApi, ControllerSystemApi} from '../../system';
import {ControllerRolApi, EntityRolApi, ModelRolApi} from '../../rol';
import {ControllerUserApi, EntityUserApi} from '../../user';
import {PasswordModelCore} from '../../../../core/model/types/password.model.core';

enum role {
  user = 'user',
  admin = 'admin'
}

export class ModelUserApi extends ModelCore {
  name: string;
  email: EmailModelCoreApi;
  password: PasswordModelCore;
  role: role;
  rol: ForeignkeyModelCoreApi<ControllerRolApi, EntityRolApi, ModelRolApi>;
  picture: string;
  pin: number;
  system: ForeignkeyModelCoreApi<ControllerSystemApi, EntitySystemApi, ModelSystemApi>;
// parent: ForeignkeyModelCoreApi<ControllerUserApi, EntityUserApi, ModelUserApi>;

  constructor() {
    super();
    this.name = '';
    this.email = new EmailModelCoreApi('');
    this.password = new PasswordModelCore('');
    this.role = role.user;
    this.picture = '';
    this.rol = new ForeignkeyModelCoreApi<ControllerRolApi, EntityRolApi, ModelRolApi>(new ControllerRolApi(), '');
    this.pin = 0;
    this.system = new ForeignkeyModelCoreApi(new ControllerSystemApi(), '');
    // this.parent = new ForeignkeyModelCoreApi<ControllerUserApi, EntityUserApi, ModelUserApi>(new ControllerUserApi(), '');
  }
}
