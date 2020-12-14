import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableComponent} from './table.component';
import {ControllerCoreApi, ModelCore, EntityCore} from '../../../../../core';
import {ControllerUserApi} from "../../../../../api";

describe('TableComponent', () => {
  let component: TableComponent<ControllerCoreApi<EntityCore<ModelCore>, ModelCore>, EntityCore<ModelCore>, ModelCore>;
  let fixture: ComponentFixture<TableComponent<ControllerCoreApi<EntityCore<ModelCore>, ModelCore>, EntityCore<ModelCore>, ModelCore>>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.controller = new ControllerUserApi();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
