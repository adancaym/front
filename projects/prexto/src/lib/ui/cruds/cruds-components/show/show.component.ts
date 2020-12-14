import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {EntityCore} from '../../../../../core/entity';
import {ModelCore} from '../../../../../core/model/model';
import {ForeignkeyModelCoreApi} from '../../../../../core/model/types';

@Component({
  selector: 'lib-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent<E extends EntityCore<M>, M extends ModelCore >  implements OnInit {

  @Input() entity: E;
  model: M;
  constructor(protected builder: FormBuilder) {}
  async ngOnInit() {
    this.initVars();
  }
  initVars(){
    this.model = this.entity.getModel();
  }

  getEntity(nameProperty) {
    if (this.isEntity(nameProperty)){
      const fktmp = this.model[nameProperty];
      return fktmp.entity;
    }
  }
  isEntity(nameProperty) {
    return this.model[nameProperty] instanceof ForeignkeyModelCoreApi;
  }

}
