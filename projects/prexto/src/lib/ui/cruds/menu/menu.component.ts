import {Component, OnInit} from '@angular/core';
import {ControllerUserApi, EntityPermisionApi, EntityUserApi} from '../../../../api';
import {ControllerPermisionApi} from '../../../../api/endpoints/permision';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  controllerUser: ControllerUserApi;
  controllerPermision: ControllerPermisionApi;
  user: EntityUserApi;
  permisos: EntityPermisionApi;

  constructor() {
    this.controllerPermision = new ControllerPermisionApi();
    this.controllerUser = new ControllerUserApi();
  }
  async ngOnInit() {
    await this.controllerUser.list();
    this.user = await this.controllerUser.meEntity();
    this.permisos = await this.controllerPermision.getOneByRolId(this.user.getModel().rol.toString());
    console.log(this.permisos);
  }

}
