import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'publiInicio',
  templateUrl: './publiInicio.component.html',
  styleUrls: ['./publiInicio.component.css'],
})
export class PubliInicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.setItem('administradorId', "")
    sessionStorage.setItem('idUsuario', "")
    sessionStorage.setItem('nombreUsuario', "")
    sessionStorage.setItem('validacion', 'false')
    sessionStorage.setItem('validacionVisualizacion', "")
  }

}
