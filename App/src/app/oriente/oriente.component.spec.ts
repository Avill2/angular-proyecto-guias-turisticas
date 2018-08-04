import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrienteComponent } from './oriente.component';

describe('OrienteComponent', () => {
  let component: OrienteComponent;
  let fixture: ComponentFixture<OrienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
