import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { InicioListaComponent } from './components/inicioApp/inicioLista/inicioLista.component';

import { ClienteDetalleComponent } from './components/clientes/clienteDetalle/clienteDetalle.component';
import { ClienteListaComponent } from './components/clientes/clienteLista/clienteLista.component';
import { ClienteRegistroComponent } from './components/clientes/clienteRegistro/clienteRegistro.component';

import { InmuebleDetalleComponent } from './components/inmuebles/inmuebleDetalle/inmuebleDetalle.component';
import { InmuebleListaComponent } from './components/inmuebles/inmuebleLista/inmuebleLista.component';
import { InmueblesRegistroComponent } from './components/inmuebles/inmuebleRegistro/inmuebleRegistro.component';

import { UsuarioDetalleComponent } from './components/usuarios/usuarioDetalle/usuarioDetalle.component';
import { UsuarioListaComponent } from './components/usuarios/usuarioLista/usuarioLista.component';
import { UsuarioRegistroComponent } from './components/usuarios/usuarioRegistro/usuarioRegistro.component';

import { NavAppComponent } from './components/navegadores/generalNav/navApp.component';
import { PubliInicioComponent } from './components/publiRegistros/publicidad/publiInicio/publiInicio.component';

import { AdministradorRegistroComponent } from './components/usuarios/administradorRegistro/administradorRegistro.component';
import { LoginComponent } from './components/publiRegistros/login/login.component';
import { LoginNavComponent } from './components/navegadores/loginNav/loginNav.component';

import { RolListaComponent } from './components/tipos/roles/rolLista/rolLista.component';
import { RolRegistroComponent } from './components/tipos/roles/rolRegistro/rolRegistro.component';
import { PeriodoListaComponent } from './components/tipos/periodos/periodoLista/periodoLista.component';
import { PeriodoRegistroComponent } from './components/tipos/periodos/periodoRegistro/periodoRegistro.component';
import { TipoInmuebleListaComponent } from './components/tipos/inmuebles/tipoInmuebleLista/tipoInmuebleLista.component';
import { TipoInmuebleRegistroComponent } from './components/tipos/inmuebles/tipoInmuebleRegistro/tipoInmuebleRegistro.component';
import { TiposComponent } from './components/tipos/tipos/tipos.component';

import { ContratoListaComponent } from './components/contratosIntervinientes/contratos/contratoLista/contratoLista.component';
import { ContratoDetalleComponent } from './components/contratosIntervinientes/contratos/contratoDetalle/contratoDetalle.component';
import { ContratoRegistroComponent } from './components/contratosIntervinientes/contratos/contratoRegistro/contratoRegistro.component';
import { IntervinienteDetalleComponent } from './components/contratosIntervinientes/intervinientes/intervinienteDetalle/intervinienteDetalle.component';
import { IntervinienteListaComponent } from './components/contratosIntervinientes/intervinientes/intervinienteLista/intervinienteLista.component';
import { IntervinienteRegistroComponent } from './components/contratosIntervinientes/intervinientes/intervinienteRegistro/intervinienteRegistro.component';

import { BalanceListaComponent } from './components/balances/balanceLista/balanceLista.component';
import { BalanceXAnioComponent } from './components/balances/balanceXAnio/balanceXAnio.component';
import { BalanceXInmuebleComponent } from './components/balances/balanceXInmueble/balanceXInmueble.component';
import { BalanceXMesComponent } from './components/balances/balanceXMes/balanceXMes.component';

import { ModificacionTiposComponent } from './components/tipos/modificacionTipos/modificacionTipos.component';
import { TipoContratoRegistroComponent } from './components/tipos/contratos/tipoContratoRegistro/tipoContratoRegistro.component';
import { TipoIntervinienteListaComponent } from './components/tipos/intervinientes/tipoIntervinienteLista/tipoIntervinienteLista.component';
import { TipoIntervinienteRegistroComponent } from './components/tipos/intervinientes/tipoIntervinienteRegistro/tipoIntervinienteRegistro.component';
import { TipoCoceptoListaComponent } from './components/tipos/conceptos/tipoCoceptoLista/tipoCoceptoLista.component';
import { TipoContratoListaComponent } from './components/tipos/contratos/tipoContratoLista/tipoContratoLista.component';
import { TipoConceptoRegistroComponent } from './components/tipos/conceptos/tipoConceptoRegistro/tipoConceptoRegistro.component';
import { TipoPagoListaComponent } from './components/tipos/Pagos/tipoPagoLista/tipoPagoLista.component';
import { TipoPagoRegistroComponent } from './components/tipos/Pagos/tipoPagoRegistro/tipoPagoRegistro.component';
import { TipoCategoriaListaComponent } from './components/tipos/categorias/tipoCategoriaLista/tipoCategoriaLista.component';
import { TipoCategoriaRegistroComponent } from './components/tipos/categorias/tipoCategoriaRegistro/tipoCategoriaRegistro.component';


import { InGaInicioComponent } from './components/ingresosGastos/inGaInicio/inGaInicio.component';
import { IngaDetalleComponent } from './components/ingresosGastos/ingaDetalle/ingaDetalle.component';
import { IngaRegistroGeneralComponent } from './components/ingresosGastos/ingaRegistroGeneral/ingaRegistroGeneral.component';
import { IngresoRegistroGeneralComponent } from './components/ingresosGastos/ingresoRegistroGeneral/ingresoRegistroGeneral.component';
import { InicioAyudaComponent } from './components/Ayudas/inicioAyuda/inicioAyuda.component';
import { UsuarioAyudaComponent } from './components/Ayudas/UsuarioAyuda/usuarioAyuda.component';
import { EntidadesAyudaComponent } from './components/Ayudas/entidadesAyuda/entidadesAyuda.component';
import { InmueblesAyudaComponent } from './components/Ayudas/inmueblesAyuda/inmueblesAyuda.component';
import { ContratoAyudaComponent } from './components/Ayudas/contratoAyuda/contratoAyuda.component';
import { BalanceAyudaComponent } from './components/Ayudas/balanceAyuda/balanceAyuda.component';
import { TiposAyudaComponent } from './components/Ayudas/tiposAyuda/tiposAyuda.component';
import { InGaAyudaComponent } from './components/Ayudas/inGaAyuda/inGaAyuda.component';
import { SliderComponent } from './components/publiRegistros/slider/slider.component';
import { QuienessomosComponent } from './components/publiRegistros/publicidad/quienessomos/quienessomos.component';
import { ComoFuncionaComponent } from './components/publiRegistros/publicidad/comoFunciona/comoFunciona.component';
import { PreciosComponent } from './components/publiRegistros/publicidad/precios/precios.component';
import { ContactoComponent } from './components/publiRegistros/contacto/contacto.component';







@NgModule({
  declarations: [
    AppComponent,

    //Navegadores//
    NavAppComponent,
    LoginNavComponent,
    //Ayudas//
    InicioAyudaComponent,
    UsuarioAyudaComponent,
    EntidadesAyudaComponent,
    InmueblesAyudaComponent,
    ContratoAyudaComponent,
    BalanceAyudaComponent,
    TiposAyudaComponent,
    InGaAyudaComponent,

    // Balance ingreso gasto
    BalanceListaComponent,
    BalanceXAnioComponent,
    BalanceXInmuebleComponent,
    BalanceXMesComponent,
    

    //Ingreso Gasto
    IngaRegistroGeneralComponent,
    IngresoRegistroGeneralComponent,
    IngaDetalleComponent,
    InGaInicioComponent,

    //Clientes
    ClienteDetalleComponent,
    ClienteListaComponent,
    ClienteRegistroComponent,

    //Contratos
    ContratoDetalleComponent,
    ContratoListaComponent,
    ContratoRegistroComponent,

    //Intervinientes
    IntervinienteListaComponent,
    IntervinienteRegistroComponent,
    IntervinienteDetalleComponent,

    //Inicio
    InicioListaComponent,

    //Inmuebles
    InmuebleDetalleComponent,
    InmuebleListaComponent,
    InmueblesRegistroComponent,

    //PubliRegistro
    PubliInicioComponent,
    SliderComponent,
    QuienessomosComponent,
    ComoFuncionaComponent,
    PreciosComponent,
    ContactoComponent,
   
    LoginComponent,

    //Tipos  
    TiposComponent,
    RolListaComponent,
    RolRegistroComponent,
    PeriodoListaComponent,
    PeriodoRegistroComponent,
    TipoIntervinienteListaComponent,
    TipoIntervinienteRegistroComponent,
    TipoInmuebleListaComponent,
    TipoInmuebleRegistroComponent,
    TipoContratoListaComponent,
    TipoContratoRegistroComponent,
    ModificacionTiposComponent,
    TipoCoceptoListaComponent,
    TipoConceptoRegistroComponent,
    TipoPagoListaComponent,
    TipoPagoRegistroComponent,
    TipoCategoriaListaComponent,
    TipoCategoriaRegistroComponent,

    //Usuarios
    UsuarioDetalleComponent,
    UsuarioListaComponent,
    UsuarioRegistroComponent,
    AdministradorRegistroComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
