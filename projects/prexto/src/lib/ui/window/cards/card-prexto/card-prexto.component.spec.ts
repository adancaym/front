import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrextoComponent } from './card-prexto.component';

describe('CardPrextoComponent', () => {
  let component: CardPrextoComponent;
  let fixture: ComponentFixture<CardPrextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPrextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
