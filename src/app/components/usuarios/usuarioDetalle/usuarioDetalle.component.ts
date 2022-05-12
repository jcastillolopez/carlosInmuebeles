import { Component, OnInit } from '@angular/core';
import { Globales } from 'src/app/services/Globales.service';
import { usuarioInterface } from 'src/app/interfaces/usuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'usuarioDetalle',
  templateUrl: './usuarioDetalle.component.html',
  styleUrls: ['./usuarioDetalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  path: string = 'clientes/detalle/'
  usuario: usuarioInterface
  constructor(
    private metodoGlobales:Globales,
    private activateRouter: ActivatedRoute
  ) {   

    this.usuario = {      
      nombre: "",      
      email: "",
      password: "",
      tlfMovil: "",     
      borrado: false,
      idUsuario: 0,
      nombreRol: '',
      administradorId:0     
    }
   }

   ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodoGlobales.getById(this.path,params['id'])
      this.usuario = response[0]
    })
  }

}
