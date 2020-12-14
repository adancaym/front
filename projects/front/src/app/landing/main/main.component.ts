import {Component, OnInit, ViewChild} from '@angular/core';
import {NavbarComponent, ControllerSystemApi} from 'prexto';
import {Router} from '@angular/router';
@Component({
  selector: 'front-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  @ViewChild('navigation') navigation: NavbarComponent;
  menus: Array<string>;
  controllerSystemApi: ControllerSystemApi;
  constructor(protected router: Router) {
    this.menus = [];
    this.navigation = new NavbarComponent(router);
    this.controllerSystemApi = new ControllerSystemApi(true);
  }

  async ngOnInit(){
    await this.controllerSystemApi.listFromLocal(true);
    this.menus = this.controllerSystemApi.rows.map(e => e.getModel().system);
  }

}
