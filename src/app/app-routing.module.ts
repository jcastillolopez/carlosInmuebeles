import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Inicio
import { InicioListaComponent } from './components/inicioApp/inicioLista/inicioLista.component';

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

//Tipos
import { TiposComponent } from './components/tipos/tipos/tipos.component';
import { TipoContratoListaComponent } from './components/tipos/contratos/tipoContratoLista/tipoContratoLista.component';
import { TipoInmuebleListaComponent } from './components/tipos/inmuebles/tipoInmuebleLista/tipoInmuebleLista.component';
import { TipoIntervinienteListaComponent } from './components/tipos/intervinientes/tipoIntervinienteLista/tipoIntervinienteLista.component';
import { PeriodoListaComponent } from './components/tipos/periodos/periodoLista/periodoLista.component';
import { RolListaComponent } from './components/tipos/roles/rolLista/rolLista.component';

//Contratos Intervininetes
import { ContratoListaComponent } from './components/contratosIntervinientes/contratos/contratoLista/contratoLista.component';
import { ContratoDetalleComponent } from './components/contratosIntervinientes/contratos/contratoDetalle/contratoDetalle.component';

//Balance
import { BalanceListaComponent } from './components/balances/balanceLista/balanceLista.component';
import { ModificacionTiposComponent } from './components/tipos/modificacionTipos/modificacionTipos.component';
import { IntervinienteDetalleComponent } from './components/contratosIntervinientes/intervinientes/intervinienteDetalle/intervinienteDetalle.component';

import { IngaRegistroGeneralComponent } from './components/ingresosGastos/ingaRegistroGeneral/ingaRegistroGeneral.component';
import { TipoCoceptoListaComponent } from './components/tipos/conceptos/tipoCoceptoLista/tipoCoceptoLista.component';
import { TipoConceptoRegistroComponent } from './components/tipos/conceptos/tipoConceptoRegistro/tipoConceptoRegistro.component';
import { InGaInicioComponent } from './components/ingresosGastos/inGaInicio/inGaInicio.component';
import { IngaDetalleComponent } from './components/ingresosGastos/ingaDetalle/ingaDetalle.component';
import { TipoPagoListaComponent } from './components/tipos/Pagos/tipoPagoLista/tipoPagoLista.component';
import { TipoPagoRegistroComponent } from './components/tipos/Pagos/tipoPagoRegistro/tipoPagoRegistro.component';
import { TipoCategoriaListaComponent } from './components/tipos/categorias/tipoCategoriaLista/tipoCategoriaLista.component';
import { TipoCategoriaRegistroComponent } from './components/tipos/categorias/tipoCategoriaRegistro/tipoCategoriaRegistro.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/publi' },

  // publi registro
  {
    path: 'publi', component: PubliInicioComponent, children: []
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
  { path: 'balances', component: BalanceListaComponent },
  {
    path: 'inga', component: InGaInicioComponent, children: [
      { path: 'general', component: IngaRegistroGeneralComponent },
      { path: 'detalle/:id', component: IngaDetalleComponent },
    ]
  },

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
      {
        path: 'detalle/:id', component: ContratoDetalleComponent, children: [
          { path: 'interviniente/:idInterviniente', component: IntervinienteDetalleComponent }
        ]
      },
    ]
  },

  // tipos
  {
    path: 'tipos', component: TiposComponent, children: [
      {
        path: 'inmueble', component: TipoInmuebleListaComponent, children: [
          { path: 'modificacion/:id', component: ModificacionTiposComponent }
        ]
      },
      {
        path: 'contrato', component: TipoContratoListaComponent, children: [
          { path: 'modificacion/:id', component: ModificacionTiposComponent }
        ]
      },
      {
        path: 'interviniente', component: TipoIntervinienteListaComponent, children: [
          { path: 'modificacion/:id', component: ModificacionTiposComponent }
        ]
      },
      {
        path: 'periodo', component: PeriodoListaComponent, children: [
          { path: 'modificacion/:id', component: ModificacionTiposComponent }
        ]
      },
      {
        path: 'rol', component: RolListaComponent, children: [
          { path: 'modificacion/:id', component: ModificacionTiposComponent }
        ]
      },
      {
        path: 'concepto', component: TipoCoceptoListaComponent, children: [
          { path: 'modificacion/:id', component: TipoConceptoRegistroComponent },
        ]
      },
      {
        path: 'pago', component: TipoPagoListaComponent, children: [
          { path: 'modificacion/:id', component: TipoPagoRegistroComponent },
        ]
      },
      {
        path: 'categoria', component: TipoCategoriaListaComponent, children: [
          { path: 'modificacion/:id', component: TipoCategoriaRegistroComponent },
        ]
      },
    ]
  },

  { path: '**', pathMatch: 'full', redirectTo: '/publi' },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
