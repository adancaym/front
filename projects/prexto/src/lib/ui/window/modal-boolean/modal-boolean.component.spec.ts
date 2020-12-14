import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBooleanComponent } from './modal-boolean.component';

describe('ModalComponent', () => {
  let component: ModalBooleanComponent;
  let fixture: ComponentFixture<ModalBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
