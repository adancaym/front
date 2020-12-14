import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginComponent } from './form-login.component';
import {ControllerAuthApi} from '../../../../api';

import { RouterTestingModule,  } from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';


describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule, ToastrModule.forRoot()],
      providers: [ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    component.redirect = '/';
    component.auth = new ControllerAuthApi();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
