import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycSendengoComponent } from './kyc-sendengo.component';

describe('KycSendengoComponent', () => {
  let component: KycSendengoComponent;
  let fixture: ComponentFixture<KycSendengoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycSendengoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycSendengoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
