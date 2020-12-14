import {Component, OnInit, ViewChild} from '@angular/core';
import {ControllerTableApi, ModelTableApi, EntityTableApi} from '../../../api/endpoints/table/';
import {TableComponent} from '../../ui/cruds/cruds-components';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lib-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  controller: ControllerTableApi;
  @ViewChild('table') tabla: TableComponent<ControllerTableApi, EntityTableApi, ModelTableApi>;
  constructor(router: Router, toast: ToastrService) {
    this.controller = new ControllerTableApi();
    this.tabla = new TableComponent<ControllerTableApi, EntityTableApi, ModelTableApi>(router, toast);
  }
  ngOnInit(): void {
  }

}
