import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IneFormComponent } from './ine-form.component';

describe('IneFormComponent', () => {
  let component: IneFormComponent;
  let fixture: ComponentFixture<IneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
