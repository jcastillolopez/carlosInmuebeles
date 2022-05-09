import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Inicio
import { InicioComponent } from './components/inicio/inicio/inicio.component';

//Inmuebles
import { InmuebleListaComponent } from './components/inmuebles/inmuebleLista/inmuebleLista.component';
import { InmuebleDetalleComponent } from './components/inmuebles/inmuebleDetalle/inmuebleDetalle.component';
//Clientes
import { ClienteListaComponent } from './components/clientes/clienteLista/clienteLista.component';
import { ClienteDetalleComponent } from './components/clientes/clienteDetalle/clienteDetalle.component';
//Usuarios
import { UsuarioListaComponent } from './components/usuarios/usuarioLista/usuarioLista.component';
import { UsuarioDetalleComponent } from './components/usuarios/usuarioDetalle/usuarioDetalle.component';
//Publi
import { PubliInicioComponent } from './components/publiRegistros/publicidad/publiInicio/publiInicio.component';
import { TiposComponent } from './components/tipos/tipos/tipos.component';
import { ContratoListaComponent } from './components/contratos/contratos/contratoLista/contratoLista.component';
import { IntervinienteListaComponent } from './components/tipos/intervinientes/intervinienteLista/intervinienteLista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/publi' },
  // publi registro
  {
    path: 'publi', component: PubliInicioComponent, children: [

    ]
  },
  // usuarios
  {
    path: 'usuarios', component: UsuarioListaComponent, children: [
      { path: 'detalle/:id', component: UsuarioDetalleComponent }
    ]
  },
  //inicio
  { path: 'inicio', component: InicioComponent },
  // inmuebles
  {
    path: 'inmuebles', component: InmuebleListaComponent, children: [
      { path: 'detalle/:id', component: InmuebleDetalleComponent },
    ]
  },
  //clientes
  {
    path: 'clientes', component: ClienteListaComponent, children: [
      { path: 'detalle/:id', component: ClienteDetalleComponent }
    ]
  },
  //  contratos
  {
    path: 'contratos', component: ContratoListaComponent, children: [
      { path:'intervinientes/:id', component: IntervinienteListaComponent
      },
  ] },

  // tipos
  { path: 'tipos', component: TiposComponent },

  { path: '**', pathMatch: 'full', redirectTo: '/publi' },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
