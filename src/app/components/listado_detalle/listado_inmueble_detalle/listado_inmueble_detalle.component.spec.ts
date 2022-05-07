/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Listado_inmueble_detalleComponent } from './listado_inmueble_detalle.component';

describe('Listado_inmueble_detalleComponent', () => {
  let component: Listado_inmueble_detalleComponent;
  let fixture: ComponentFixture<Listado_inmueble_detalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listado_inmueble_detalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listado_inmueble_detalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
