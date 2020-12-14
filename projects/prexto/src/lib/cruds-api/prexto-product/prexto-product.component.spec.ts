import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrextoProductComponent } from './prexto-product.component';

describe('PrextoProductComponent', () => {
  let component: PrextoProductComponent;
  let fixture: ComponentFixture<PrextoProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrextoProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrextoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
