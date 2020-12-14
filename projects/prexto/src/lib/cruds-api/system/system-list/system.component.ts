import {Component, OnInit, ViewChild} from '@angular/core';
import {TableComponent} from '../../../ui/cruds/cruds-components';
import {ControllerSystemApi, EntitySystemApi, ModelSystemApi} from '../../../../api';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  controller: ControllerSystemApi;
  @ViewChild('table') tabla: TableComponent<ControllerSystemApi, EntitySystemApi, ModelSystemApi>;
  entity: EntitySystemApi;
  constructor(protected toast: ToastrService, protected router: Router) {
    this.controller = new ControllerSystemApi(true);
    this.tabla = new TableComponent<ControllerSystemApi, EntitySystemApi, ModelSystemApi>(router, toast);
  }
  ngOnInit(): void {
  }
}
