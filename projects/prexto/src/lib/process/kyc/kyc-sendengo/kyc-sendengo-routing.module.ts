import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KycSendengoComponent} from './kyc-sendengo/kyc-sendengo.component';

const routes: Routes = [
  {path: '', component: KycSendengoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KycSendengoRoutingModule { }
