import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import {ControllerAuthApi, ModelSystemApi, NavbarComponent} from 'prexto';

@Component({
  selector: 'front-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.sass']
})
export class SystemComponent implements OnInit {

  @ViewChild('navigation') navigation: NavbarComponent;
  controllerAuthApi: ControllerAuthApi;
  system: ModelSystemApi;
  menus: Array<string>;
  constructor(protected router: Router) {
    this.navigation = new NavbarComponent(router);
    this.controllerAuthApi = new ControllerAuthApi();
    this.system = this.controllerAuthApi.session.getJson('system');
    this.menus = [this.system.system + '/login'];

  }

  ngOnInit(): void {
  }

}
