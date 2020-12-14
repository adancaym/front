import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ControllerAuthApi, ModelUserApi} from '../../../../api/endpoints';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'lib-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  auth: ControllerAuthApi;
  loginForm: FormGroup;
  toRedirect: Promise<string>;
  redirect: string;
  system: string;
  constructor(private formBuilder: FormBuilder,
              protected toast: ToastrService,
              protected router: Router,
              protected route: ActivatedRoute
  ) {
    this.auth = new ControllerAuthApi();
    this.system = this.route.snapshot.params.system;
    this.route.queryParams.subscribe((params) => {
      if (params.redirect) {
        this.redirect = params.redirect;
      }
    });
  }
  async ngOnInit() {
    this.createForm();
    if (!this.redirect){
      this.redirect = '/';
    }
  }
  createForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
  navigate(){
    this.redirect = this.system + '/' + this.redirect;
    if (this.redirect){
      this.router.navigate([this.redirect]);
    }else {
      this.router.navigate(['/']);
    }
  }
  async onSubmit(values){
    const {email, password} = values;
    const user = new ModelUserApi();
    user.email = email;
    user.password = password;
    try {
      await this.auth.logIn(user)
        .then(r => {
          this.toast.info('Se ha iniciado sesión', 'Exito');
          this.auth.restartError();
          this.navigate();
        });
    } catch (e) {
      this.auth.incrementError();
      this.toast.error('No se ha podido iniciar sesión, por favor verifica tus datos', 'Falla al iniciar sessión');
    }
  }
}
