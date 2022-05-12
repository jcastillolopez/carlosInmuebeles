import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Inicio

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
import { IntervinienteListaComponent } from './components/contratosIntervinientes/intervinientes/intervinienteLista/intervinienteLista.component';
import { ContratoListaComponent } from './components/contratosIntervinientes/contratos/contratoLista/contratoLista.component';
import { InicioListaComponent } from './components/inicioApp/inicioLista/inicioLista.component';
import { TipoInmuebleListaComponent } from './components/tipos/inmuebles/tipoInmuebleLista/tipoInmuebleLista.component';

import { TipoIntervinienteListaComponent } from './components/tipos/intervinientes/tipoIntervinienteLista/tipoIntervinienteLista.component';
import { PeriodoListaComponent } from './components/tipos/periodos/periodoLista/periodoLista.component';
import { RolListaComponent } from './components/tipos/roles/rolLista/rolLista.component';
import { BalanceListaComponent } from './components/balances/balanceLista/balanceLista.component';
import { TipoContratoListaComponent } from './components/tipos/contratos/tipoContratoLista/tipoContratoLista.component';


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
  { path: 'inicio', component: InicioListaComponent },
  // balance
  { path: 'balances', component: BalanceListaComponent},
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
  {
    path: 'tipos', component: TiposComponent, children: [
      { path: 'inmueble', component: TipoInmuebleListaComponent },
      {path: 'contrato', component: TipoContratoListaComponent},   
      { path: 'interviniente', component: TipoIntervinienteListaComponent },
      { path: 'periodo', component: PeriodoListaComponent },
      { path: 'rol', component: RolListaComponent},
  ]},

  { path: '**', pathMatch: 'full', redirectTo: '/publi' },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
