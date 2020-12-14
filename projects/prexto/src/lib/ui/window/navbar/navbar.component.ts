import {Component, Input, OnInit} from '@angular/core';
import {ControllerAuthApi, ModelSystemApi} from '../../../../api';
import {Router} from '@angular/router';
import {ControllerSystemApi} from '../../../../api/endpoints/system';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() title: string;
  @Input() menus: Array<string>;
  @Input() redirect: string;
  auth: ControllerAuthApi;
  system: ControllerSystemApi;

  constructor(protected router: Router) {
    this.auth = new ControllerAuthApi();
    this.system = new ControllerSystemApi(true);
  }

  async inivars() {
    if (!this.menus) {
      this.menus = [];
    }
    if (!this.redirect) {
      this.redirect = '/kyc';
    }
    await this.system.list();
  }

  async ngOnInit() {
    await this.inivars();
  }

  gotToSystem(event, system) {
    event.preventDefault();
    this.router.navigate(['/' + system], {queryParams: {redirect: this.redirect}});
  }

  async goToLogin(event) {
    event.preventDefault();
    const modelSystem: ModelSystemApi = this.auth.session.getJson('system');
    this.router.navigate([modelSystem.system + '/login'], {queryParams: {redirect: this.redirect}});

  }
}

