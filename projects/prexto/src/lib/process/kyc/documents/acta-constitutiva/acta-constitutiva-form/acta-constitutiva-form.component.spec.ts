import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaConstitutivaFormComponent } from './acta-constitutiva-form.component';

describe('ActaConstitutivaFormComponent', () => {
  let component: ActaConstitutivaFormComponent;
  let fixture: ComponentFixture<ActaConstitutivaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActaConstitutivaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaConstitutivaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
