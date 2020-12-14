import {Component, OnInit, ViewChild} from '@angular/core';
import {ControllerPrextoProductApi, EntityPrextoProductApi, ModelPrextoProductApi} from '../../../api/endpoints';
import {TableComponent} from '../../ui/cruds/cruds-components';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-prexto-product',
  templateUrl: './prexto-product.component.html',
  styleUrls: ['./prexto-product.component.css']
})
export class PrextoProductComponent implements OnInit {

  controller: ControllerPrextoProductApi;
  @ViewChild('table') tabla: TableComponent<ControllerPrextoProductApi, EntityPrextoProductApi, ModelPrextoProductApi>;
  constructor(toast: ToastrService, router: Router) {
    this.controller = new ControllerPrextoProductApi(true);
    this.tabla = new TableComponent<ControllerPrextoProductApi, EntityPrextoProductApi, ModelPrextoProductApi>(router, toast);
  }
  async updateList(e){
    if (this.controller.useIndexDb){
      await this.controller.listFromLocal(true);
    }else{
      await this.controller.list();
    }
  }
  ngOnInit(): void {
  }

}
