import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FileRoutingModule} from './file-routing.module';
import {IframeComponent} from './iframe/iframe.component';
import {ObjectComponent} from './object/object.component';
import {SliderComponent} from './slider/slider.component';
import {WindowModule} from '../window';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [IframeComponent, ObjectComponent, SliderComponent, NotFoundComponent],
  exports: [
    SliderComponent,
    IframeComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    WindowModule
  ]
})
export class FileModule { }
