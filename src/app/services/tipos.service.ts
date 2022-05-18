import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Globales } from './Globales.service';

@Injectable({
  providedIn: 'root'
})
export class tiposService {
  urlBase: string;
  constructor(
    private metodosGlobales: Globales,

  ) { 
    this.urlBase = 'tipos/';
}
  getAllTipos(tipoSelect: string) {
    return this.metodosGlobales.getAll(this.urlBase + tipoSelect)
  }

  create(formValue: any, paramurl: string) {
    return this.metodosGlobales.create(formValue, this.urlBase + paramurl);
  }

  update(formValue: any, paramurl: string) {
    return this.metodosGlobales.update(formValue, this.urlBase + paramurl);
  }
}