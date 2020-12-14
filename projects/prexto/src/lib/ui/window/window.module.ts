import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {OverlayService} from './overlay/overlay.service';

import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {ModalBooleanComponent} from './modal-boolean/modal-boolean.component';
import {OverlayComponent} from './overlay/overlay.component';
import {CardPrextoComponent} from './cards/card-prexto/card-prexto.component';
import {SafeUrlPipe} from '../pipes';

@NgModule({
  declarations: [
    NavbarComponent,
    ModalBooleanComponent,
    OverlayComponent,
    CardPrextoComponent,
    SafeUrlPipe
  ],
  providers: [OverlayService],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    ModalBooleanComponent,
    OverlayComponent,
    SafeUrlPipe,
    CardPrextoComponent
  ]
})
export class WindowModule { }
