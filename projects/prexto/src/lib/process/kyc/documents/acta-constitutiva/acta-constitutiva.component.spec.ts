import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaConstitutivaComponent } from './acta-constitutiva.component';

describe('ActaConstitutivaComponent', () => {
  let component: ActaConstitutivaComponent;
  let fixture: ComponentFixture<ActaConstitutivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActaConstitutivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaConstitutivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
