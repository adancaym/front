import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPrextoProductsComponent } from './system-prexto-products.component';

describe('SystemPrextoProductsComponent', () => {
  let component: SystemPrextoProductsComponent;
  let fixture: ComponentFixture<SystemPrextoProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemPrextoProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemPrextoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
