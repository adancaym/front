import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControllerCoreApi, ModelCore, EntityCore, ForeignkeyModelCoreApi} from '../../../../../core';
import {EntitySystemApi} from '../../../../../api/endpoints/system';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<C extends ControllerCoreApi<E, M>, E extends EntityCore<M>, M extends ModelCore> implements OnInit {
  @Input() controller: C;
  @Input() showNavBar: boolean;
  @Output() eventToDo = new EventEmitter<{evento: string, entity: E}>();
  constructor(private route: Router, private toast: ToastrService) {
  }
  async events(evento: string, entity: EntitySystemApi){
    switch (evento){
      case 'edit': {
        this.route.navigate([this.route.url + '/edit/' + entity.getModel().id]);
        break;
      }
      case 'delete': {
        await this.controller.delete(entity.getModel().id.toString());
        await this.controller.list();
        break;
      }
      case 'new': {
        this.route.navigate([this.route.url + '/new/']);
        break;
      }
      default: {
        this.toast.info('Accion no encontrada');
        break;
      }
    }
  }
  async ngOnInit() {
    await this.initVars();
  }
  async list(){
    await this.controller.list();
  }
  async initVars(){
    if (this.showNavBar == null){
      this.showNavBar = false;
    }
    await this.list();
  }
  isEntity(nameProperty, entity: E) {
    return entity.getPropertie(nameProperty) instanceof ForeignkeyModelCoreApi && entity.getPropertie(nameProperty) != null;
  }
  getEntity(nameProperty, entity: E) {
    if (this.isEntity(nameProperty, entity)){
      const fktmp = entity.getPropertie(nameProperty);
      return fktmp.entity;
    }
  }
}
