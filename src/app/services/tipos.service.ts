import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Globales } from './Globales.service';

@Injectable({
  providedIn: 'root'
})
export class tiposService {
  urlBase: string = environment.APIPATH_TIPOS;
  constructor(
    private metodosGlobales: Globales,
  ) {}
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