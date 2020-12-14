import {Component, OnInit, ViewChild} from '@angular/core';
import {TableComponent} from '../../ui/cruds/cruds-components';
import {

  ControllerUserApi,
  EntityUserApi,
  ModelUserApi
} from '../../../api';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lib-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  controllerUserApi: ControllerUserApi;
  @ViewChild('table') tabla: TableComponent<ControllerUserApi, EntityUserApi, ModelUserApi>;
  constructor(router: Router, toast: ToastrService) {
    this.controllerUserApi = new ControllerUserApi(true);
    this.tabla = new TableComponent<ControllerUserApi, EntityUserApi, ModelUserApi>(router, toast);
  }
  ngOnInit(): void {
  }

}
