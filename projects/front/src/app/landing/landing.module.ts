import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { MainComponent } from './main/main.component';
import {UiModule} from 'prexto';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    UiModule
  ]
})
export class LandingModule { }
