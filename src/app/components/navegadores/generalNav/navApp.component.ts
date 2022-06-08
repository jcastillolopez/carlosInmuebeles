import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'navApp',
  templateUrl: './navApp.component.html',
  styleUrls: ['./navApp.component.css']
})
export class NavAppComponent implements OnInit {
  nombreUsuario: any
  constructor() {
    this.nombreUsuario = ''
  }

  ngOnInit() {
    this.nombreUsuario = sessionStorage.getItem('nombreUsuario');
  }
  validacionAdministrador() {
    if (sessionStorage.getItem('validacionVisualizacion') == '1') {
      return true;
    } else {
      return false;
    }
  }
  validacionUser() {
    if (sessionStorage.getItem('validacionVisualizacion') == '1' || sessionStorage.getItem('validacionVisualizacion') == '2') {
      return true;
    } else {
      return false;
    }
  }
}
