import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionHotelComponent } from './recepcion-hotel.component';

describe('RecepcionHotelComponent', () => {
  let component: RecepcionHotelComponent;
  let fixture: ComponentFixture<RecepcionHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
