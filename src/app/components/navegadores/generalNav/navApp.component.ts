import { Component, OnInit } from '@angular/core';
import { PermisosService } from 'src/app/services/Permisos.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'navApp',
  templateUrl: './navApp.component.html',
  styleUrls: ['./navApp.component.css']
})
export class NavAppComponent implements OnInit {
  nombreUsuario: any
  constructor(public permisos: PermisosService) {
    this.nombreUsuario = ''
  }

  ngOnInit() {
    this.nombreUsuario = sessionStorage.getItem('nombreUsuario');
  }
}
