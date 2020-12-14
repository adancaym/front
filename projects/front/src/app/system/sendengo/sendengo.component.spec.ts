import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendengoComponent } from './sendengo.component';

describe('SendengoComponent', () => {
  let component: SendengoComponent;
  let fixture: ComponentFixture<SendengoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendengoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendengoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
