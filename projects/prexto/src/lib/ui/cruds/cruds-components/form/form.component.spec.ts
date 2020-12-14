import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import {ModelCore} from '../../../../../core/model/model';
import {EntityCore} from '../../../../../core/entity';
import {ControllerAuthApi} from '../../../../../api/endpoints/auth';
import {ControllerUserApi, ModelUserApi} from '../../../../../api/endpoints/user';
import { ReactiveFormsModule} from '@angular/forms';


describe('FormComponent', () => {
  let component: FormComponent<EntityCore<ModelCore>, ModelCore>;
  let fixture: ComponentFixture<FormComponent<EntityCore<ModelCore>, ModelCore>>;

  beforeAll(async(async () => {
    const auth = new ControllerAuthApi();
    const user = new ModelUserApi();
    user.email = 'adan@prexto.mx';
    user.password = 'asdasd';
    await auth.logIn(user);
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ ReactiveFormsModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    const controllerUser = new ControllerUserApi();
    component.entity = controllerUser.getNew();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
