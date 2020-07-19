import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoviajeComponent } from './destinoviaje.component';

describe('DestinoviajeComponent', () => {
  let component: DestinoviajeComponent;
  let fixture: ComponentFixture<DestinoviajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoviajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoviajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
