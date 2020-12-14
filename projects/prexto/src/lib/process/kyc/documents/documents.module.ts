import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, UiModule} from '../../../ui';

import {DocumentsRoutingModule} from './documents-routing.module';

import { ActaConstitutivaComponent } from './acta-constitutiva/acta-constitutiva.component';
import { ActaConstitutivaFormComponent } from './acta-constitutiva/acta-constitutiva-form/acta-constitutiva-form.component';
import { IneComponent } from './ine/ine.component';
import { IneFormComponent } from './ine/ine-form/ine-form.component';


@NgModule({
  declarations: [
  ActaConstitutivaComponent,
  ActaConstitutivaFormComponent,
  IneComponent,
  IneFormComponent,
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    UiModule,
    FormsModule
  ],
    exports: [
        ActaConstitutivaComponent,
        IneComponent
    ]
})
export class DocumentsModule { }
