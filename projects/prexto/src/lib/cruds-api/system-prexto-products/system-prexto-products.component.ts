import {Component, OnInit, ViewChild} from '@angular/core';
import {TableComponent} from '../../ui/cruds/cruds-components';
import {
  ControllerSystemPrextoProductsApi,
  EntitySystemPrextoProductsApi,
  ModelSystemPrextoProductsApi
} from '../../../api/endpoints/systemPrextoProducts';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-system-prexto-products',
  templateUrl: './system-prexto-products.component.html',
  styleUrls: ['./system-prexto-products.component.css']
})
export class SystemPrextoProductsComponent implements OnInit {


  conroller: ControllerSystemPrextoProductsApi;
  @ViewChild('table') tabla: TableComponent<ControllerSystemPrextoProductsApi, EntitySystemPrextoProductsApi, ModelSystemPrextoProductsApi>;
  constructor(toast: ToastrService, router: Router) {
    this.conroller = new ControllerSystemPrextoProductsApi();
    this.tabla = new TableComponent<ControllerSystemPrextoProductsApi, EntitySystemPrextoProductsApi, ModelSystemPrextoProductsApi>
    (router, toast);
  }
  ngOnInit(): void {
  }
}
