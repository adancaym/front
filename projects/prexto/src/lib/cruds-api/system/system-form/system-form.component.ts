import {Component, Inject, Input, OnInit} from '@angular/core';
import {ControllerSystemApi, EntitySystemApi, ModelSystemApi} from '../../../../api';
import {HeaderControllerCoreApi} from '../../../../core/controller/header';
import {ToastrService} from 'ngx-toastr';
import {ControllerSystemPrextoProductsApi} from '../../../../api/endpoints/systemPrextoProducts';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'lib-system-form',
  templateUrl: './system-form.component.html',
  styleUrls: ['./system-form.component.css']
})
export class SystemFormComponent implements OnInit {
  id: string;
  headers: Array<HeaderControllerCoreApi>;
  model: ModelSystemApi;
  controller: ControllerSystemApi;
  entity: EntitySystemApi;
  controllerSystemPrextoProduct: ControllerSystemPrextoProductsApi;
  mensaje: string;
  priority: string;
  constructor(protected toast: ToastrService, protected router: ActivatedRoute, private location: Location) {
    this.controller = new ControllerSystemApi(true);
    this.entity = null;
    this.id = this.router.snapshot.params.id;
    this.mensaje = '';
    this.priority = '';
  }
  async ngOnInit() {
    await this.initVars();
  }
  async initVars() {
    if (this.id != null){
      this.entity = await this.controller.get(this.id);
    }else{
      this.entity = this.controller.getNew();
    }
    this.model = this.entity.getModel();
    this.headers = this.entity.getHeaders();
  }
  async guardar(redirec= true){
    this.entity.setModel(this.model);
    this.entity.save().then(() => {
      this.toast.info('Se ha guardado');
      this.controller.listFromLocal(true).then(() => {
        if (redirec){
          this.location.back();
        }
      });
    }).catch(reason => {
      this.toast.warning('Error');
    });
  }
  async guardarComentario(event){
    event.preventDefault();
    this.model.mensajes.push({text: this.mensaje, priority: this.priority});
    console.log(this.model.mensajes, this.mensaje, this.priority);
    await this.guardar(false).then(() => {
      this.mensaje = '';
      this.priority = '';
    });
  }
  async borrarMensaje(mensaje){
    this.model.mensajes = this.model.mensajes.filter( mensajeinmodel => mensajeinmodel !== mensaje);
    await this.guardar(false);
  }

}
