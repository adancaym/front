import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalesComponent } from './avales.component';

describe('AvalesComponent', () => {
  let component: AvalesComponent;
  let fixture: ComponentFixture<AvalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
