/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Registro_detalleComponent } from './registro_detalle.component';

describe('Registro_detalleComponent', () => {
  let component: Registro_detalleComponent;
  let fixture: ComponentFixture<Registro_detalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registro_detalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registro_detalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
