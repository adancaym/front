import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import {SystemComponent} from './system-list/system.component';
import {SystemFormComponent} from './system-form/system-form.component';
import {FormsModule} from '@angular/forms';
import {CrudsComponentsModule} from '../../ui/cruds/cruds-components';
import {UiModule} from '../../ui';


@NgModule({
  declarations: [SystemComponent, SystemFormComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    FormsModule,
    CrudsComponentsModule,
    UiModule
  ]
})
export class SystemModule { }
