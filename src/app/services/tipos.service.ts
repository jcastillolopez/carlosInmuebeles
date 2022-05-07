import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Globales } from './Globales.service';

@Injectable({
  providedIn: 'root'
})
export class tiposService {
  urlBase: string;
  constructor(
    private metodosGlobales: Globales
  ) { 
    this.urlBase = 'Tipos/';
}
  getAllTipos(tipoSelect: string) {
    return this.metodosGlobales.getAll(this.urlBase + tipoSelect)
  }
}