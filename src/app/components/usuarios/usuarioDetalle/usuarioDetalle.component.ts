import { Component, OnInit } from '@angular/core';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { usuarioInterface } from 'src/app/interfaces/usuario';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'usuarioDetalle',
  templateUrl: './usuarioDetalle.component.html',
  styleUrls: ['./usuarioDetalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  arrSelectTipos: any[];
  usuario: usuarioInterface
  constructor(
    private metodoGlobales:Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute
  ) {   
    this.arrSelectTipos = [];
    this.usuario = {      
      nombre: "",      
      email: "",
      password: "",    
      borrado: false,
      idUsuario: 0,
      idRol: '',
      administradorId:0     
    }
   }

   async ngOnInit() {
    this.arrSelectTipos = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOROL + parseInt(sessionStorage.getItem('administradorId')!))
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodoGlobales.getById(environment.APIPATH_USUARIODETALLE,params['id'])
      this.usuario = response[0]
      for (const tipo of this.arrSelectTipos) {
        if (response.idRol == tipo.idRol) {
          this.usuario.idRol = tipo.nombreRol;
        }
      }
    })
  }

}
