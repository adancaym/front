import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KycSendengoRoutingModule} from './kyc-sendengo-routing.module';
import {KycSendengoComponent} from './kyc-sendengo/kyc-sendengo.component';
import {UiModule} from "../../../ui";
import {DocumentsModule} from "../documents/documents.module";

@NgModule({
  declarations: [KycSendengoComponent],
  imports: [
    CommonModule,
    KycSendengoRoutingModule,
    UiModule,
    DocumentsModule,
  ]
})
export class KycSendengoModule { }
