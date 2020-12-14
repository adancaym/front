import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WindowModule } from './window';
import { FormsModule } from './forms';
import { FileModule } from './file';
import { CrudsComponentsModule } from './cruds';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WindowModule,
    FormsModule,
    FileModule,
    NgbModule,
    CrudsComponentsModule
  ],
  exports: [
    WindowModule,
    FormsModule,
    FileModule,
    CrudsComponentsModule
  ]
})
export class UiModule { }
