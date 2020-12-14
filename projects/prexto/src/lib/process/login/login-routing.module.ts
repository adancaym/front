import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormLoginComponent} from './form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: FormLoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
