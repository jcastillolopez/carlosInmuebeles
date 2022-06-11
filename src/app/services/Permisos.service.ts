import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(private router: Router) { }

  validacionProp(): boolean {
    if (sessionStorage.getItem('validacion') === 'false') {
      this.router.navigate(['publi'])
      return false;
    } else {
      if (sessionStorage.getItem('validacionVisualizacion') == '1'
        || sessionStorage.getItem('validacionVisualizacion') == '2'
        || sessionStorage.getItem('validacionVisualizacion') === '3') {
        return true;
      } else {
        return false;
      }
    }
  }

  validacionUser(): boolean {
    if (sessionStorage.getItem('validacion') === 'false') {
      this.router.navigate(['publi'])
      return false;
    } else {
      if (sessionStorage.getItem('validacionVisualizacion') == '1' || sessionStorage.getItem('validacionVisualizacion') == '2') {
        return true;
      } else {
        return false;
      }
    }
  }

  validacionAdministrador() {
    if (sessionStorage.getItem('validacion') === 'false') {
      this.router.navigate(['publi'])
      return false;
    } else {
      if (sessionStorage.getItem('validacionVisualizacion') == '1') {
        return true;
      } else {
        return false;
      }
    }
  }

}
