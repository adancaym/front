import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KycRoutingModule} from './kyc-routing.module';
import {KycSendengoModule} from './kyc-sendengo/kyc-sendengo.module';

import {DocumentsModule} from './documents/documents.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KycRoutingModule,
    KycSendengoModule,
    DocumentsModule
  ],
  exports: [
    KycSendengoModule
  ]
})
export class KycModule { }
