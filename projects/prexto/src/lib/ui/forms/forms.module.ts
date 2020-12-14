import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxFileDropModule} from 'ngx-file-drop';

import {FormsRoutingModule} from './forms-routing.module';
import {UploadFileDragAndDropComponent} from './upload-file-drag-and-drop/upload-file-drag-and-drop.component';
import {FileModule} from '../file';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WindowModule} from "../window";


@NgModule({
  declarations: [
    UploadFileDragAndDropComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgxFileDropModule,
    FileModule,
    NgbModule,
    WindowModule,
  ],
  exports: [
    UploadFileDragAndDropComponent,
    NgxFileDropModule,
  ]
})
export class FormsModule { }
