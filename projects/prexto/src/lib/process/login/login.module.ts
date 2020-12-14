import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormLoginComponent } from './form-login/form-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UiModule } from '../../ui';

@NgModule({
  declarations: [FormLoginComponent],
    imports: [
      CommonModule,
      LoginRoutingModule,
      ReactiveFormsModule,
      UiModule
    ],
  exports: [
    FormLoginComponent
  ]
})
export class LoginModule { }
