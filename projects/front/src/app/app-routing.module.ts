import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemGuard, UserGuard} from 'prexto';
import {SystemComponent} from './system/system.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: ':system', component: SystemComponent,
    canActivate: [SystemGuard]
  },
  {
    path: ':system/login',
    loadChildren: () =>
      import('prexto').then(m => m.LoginModule),
    canActivate: [SystemGuard]
  },
  {
    path: ':system/kyc',
    loadChildren: () =>
      import('prexto').then(m => m.KycSendengoModule),
    canActivate: [UserGuard, SystemGuard]
  },
  {
    path: ':system/cruds',
    loadChildren: () =>
      import('prexto').then(m => m.CrudsApiModule),
    canActivate: [UserGuard, SystemGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
