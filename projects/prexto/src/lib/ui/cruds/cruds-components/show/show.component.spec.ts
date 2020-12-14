import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComponent } from './show.component';
import {EntityCore} from "../../../../../core/entity";
import {ModelCore} from "../../../../../core/model/model";
import {ControllerAuthApi, ControllerUserApi, ModelUserApi} from "../../../../../api";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

describe('ShowComponent', () => {
  let component: ShowComponent<EntityCore<ModelCore>, ModelCore>;
  let fixture: ComponentFixture<ShowComponent<EntityCore<ModelCore>, ModelCore>>;
  beforeAll(async () => {
    const auth = new ControllerAuthApi();
    const user = new ModelUserApi();
    user.email = 'adan@prexto.mx';
    user.password = 'asdasd';
    await auth.logIn(user);
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComponent ],
      imports: [ ReactiveFormsModule]

    })
    .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(ShowComponent);
    component = fixture.componentInstance;
    const controllerUser = new ControllerUserApi();
    component.entity = await controllerUser.get('5f80827b94ff0100bd82d988');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
