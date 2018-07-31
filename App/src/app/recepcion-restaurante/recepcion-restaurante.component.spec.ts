import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionRestauranteComponent } from './recepcion-restaurante.component';

describe('RecepcionRestauranteComponent', () => {
  let component: RecepcionRestauranteComponent;
  let fixture: ComponentFixture<RecepcionRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
