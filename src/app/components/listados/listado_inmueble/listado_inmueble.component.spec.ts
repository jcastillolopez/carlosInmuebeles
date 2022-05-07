/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Listado_inmuebleComponent } from './listado_inmueble.component';

describe('Listado_inmuebleComponent', () => {
  let component: Listado_inmuebleComponent;
  let fixture: ComponentFixture<Listado_inmuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listado_inmuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listado_inmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
