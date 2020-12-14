import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableComponent} from './table/table.component';
import {FormComponent} from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WindowModule} from '../../window';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ShowComponent} from './show/show.component';
import {MenuComponent} from '../menu/menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    ShowComponent,
    MenuComponent,
  ],
  exports: [
    TableComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WindowModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
  ]
})
export class CrudsComponentsModule {
}
