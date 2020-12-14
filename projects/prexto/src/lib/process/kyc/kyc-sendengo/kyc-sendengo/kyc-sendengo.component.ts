import { Component, OnInit } from '@angular/core';
import {ControllerPeopleApi, ControllerUserApi, EntityPeopleApi, EntityUserApi} from '../../../../../api';

@Component({
  selector: 'lib-kyc-sendengo',
  templateUrl: './kyc-sendengo.component.html',
  styleUrls: ['./kyc-sendengo.component.css']
})
export class KycSendengoComponent implements OnInit {

  togle = false;
  controllerUserApi = new ControllerUserApi();
  controllerPeoleApi = new ControllerPeopleApi();
  entityUserApi: EntityUserApi;
  entityPeopleApi: EntityPeopleApi;
  constructor() {
    this.controllerPeoleApi = new ControllerPeopleApi();
    this.controllerUserApi = new ControllerUserApi();
  }
  async ngOnInit() {
    this.entityUserApi = await this.controllerUserApi.meEntity();
    this.entityPeopleApi = await this.controllerPeoleApi.findEntityPeopleByUserId(this.entityUserApi.getModel().id.toString());
    console.log(this.entityPeopleApi.getModel());
    this.entityPeopleApi.getModel();
  }
  toggle(){
    this.togle = !this.togle;
  }

}
