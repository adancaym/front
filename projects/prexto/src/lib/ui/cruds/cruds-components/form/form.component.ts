import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EntityCore, ForeignkeyModelCoreApi, ModelCore, ControllerCoreApi, HeaderControllerCoreApi} from '../../../../../core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent<E extends EntityCore<M>, M extends ModelCore> implements OnInit {

  @Input() entity: E;
  formEntity: FormGroup;
  model: M;
  headers: Array<HeaderControllerCoreApi>;
  @Output() saved = new EventEmitter<boolean>();
  constructor(protected builder: FormBuilder, protected toast: ToastrService) {
  }

  async ngOnInit() {
    this.initVars();
    this.buildForm();
    await this.fill();
  }

  async guardar(model){
    for (const key of Object.keys(this.model)) {
      if (model[key]){
        this.model[key] = model[key];
      }
    }
    this.entity.setModel(this.model);
    this.entity.save().then(() => {
      this.toast.info('Se ha guardado');
      this.saved.emit(true);
      this.initVars();
    }).catch(reason => {
      this.toast.warning('Error');
    });

  }
  initVars() {
    this.model = this.entity.getModel();
    this.headers = this.entity.getHeaders();
  }

  async fill() {
    for (const key of Object.keys(this.model)) {
      const field = this.model[key];
      if (field instanceof ForeignkeyModelCoreApi) {
        await field.controller.list();
      }
    }
  }

  buildForm() {
    this.formEntity = this.builder.group(this.buildGroup());
  }

  buildGroup() {
    const group = {};
    for (const property of this.entity.getHeaders()
      .filter(header => header.name !== 'id' && header.name !== 'createdAt' && header.name !== 'updatedAt' && header.type !== 'password')) {
      group[property.name] = [this.model[property.name], Validators.required];
    }
    return group;
  }

  isEntity(nameProperty) {
    return this.model[nameProperty] instanceof ForeignkeyModelCoreApi && this.model[nameProperty] != null;
  }

  getcontroller(nameProperty) {
    if (this.isEntity(nameProperty)) {
      const fktmp = this.model[nameProperty];
      return fktmp.controller;
    }
  }
  getRows(nameProperty){
    if (this.getcontroller(nameProperty)){
      return  this.getcontroller(nameProperty).rows ? this.getcontroller(nameProperty).rows : [];
    }else{
      return [];
    }
  }

  getEntity(nameProperty) {
    if (this.isEntity(nameProperty)) {
      const fktmp = this.model[nameProperty];
      return fktmp.entity;
    }
  }
}
