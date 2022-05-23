import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteDetalleComponent } from './components/clientes/clienteDetalle/clienteDetalle.component';
import { ClienteListaComponent } from './components/clientes/clienteLista/clienteLista.component';
import { ClienteNavComponent } from './components/clientes/clienteNav/clienteNav.component';
import { ClienteRegistroComponent } from './components/clientes/clienteRegistro/clienteRegistro.component';
import { InmuebleDetalleComponent } from './components/inmuebles/inmuebleDetalle/inmuebleDetalle.component';
import { InmuebleListaComponent } from './components/inmuebles/inmuebleLista/inmuebleLista.component';
import { InmuebleNavComponent } from './components/inmuebles/inmuebleNav/inmuebleNav.component';
import { InmueblesRegistroComponent } from './components/inmuebles/inmuebleRegistro/inmuebleRegistro.component';
import { UsuarioDetalleComponent } from './components/usuarios/usuarioDetalle/usuarioDetalle.component';
import { UsuarioNavComponent } from './components/usuarios/usuarioNav/usuarioNav.component';
import { UsuarioListaComponent } from './components/usuarios/usuarioLista/usuarioLista.component';
import { UsuarioRegistroComponent } from './components/usuarios/usuarioRegistro/usuarioRegistro.component';
import { NavAppComponent } from './components/inicioApp/generalNav/navApp.component';
import { PubliInicioComponent } from './components/publiRegistros/publicidad/publiInicio/publiInicio.component';
import { PubliNavComponent } from './components/publiRegistros/publicidad/publiNav/publiNav.component';
import { LoginNavComponent } from './components/publiRegistros/loginNav/loginNav.component';
import { RolListaComponent } from './components/tipos/roles/rolLista/rolLista.component';
import { RolRegistroComponent } from './components/tipos/roles/rolRegistro/rolRegistro.component';
import { PeriodoListaComponent } from './components/tipos/periodos/periodoLista/periodoLista.component';
import { PeriodoRegistroComponent } from './components/tipos/periodos/periodoRegistro/periodoRegistro.component';
import { TipoInmuebleListaComponent } from './components/tipos/inmuebles/tipoInmuebleLista/tipoInmuebleLista.component';
import { TipoInmuebleRegistroComponent } from './components/tipos/inmuebles/tipoInmuebleRegistro/tipoInmuebleRegistro.component';
import { TiposComponent } from './components/tipos/tipos/tipos.component';
import { ContratoDetalleComponent } from './components/contratosIntervinientes/contratos/contratoDetalle/contratoDetalle.component';
import { ContratoNavComponent } from './components/contratosIntervinientes/contratoNav/contratoNav.component';
import { ContratoRegistroComponent } from './components/contratosIntervinientes/contratos/contratoRegistro/contratoRegistro.component';

import { TipoContratoRegistroComponent } from './components/tipos/contratos/tipoContratoRegistro/tipoContratoRegistro.component';
import { TipoIntervinienteListaComponent } from './components/tipos/intervinientes/tipoIntervinienteLista/tipoIntervinienteLista.component';
import { TipoIntervinienteRegistroComponent } from './components/tipos/intervinientes/tipoIntervinienteRegistro/tipoIntervinienteRegistro.component';
import { IntervinienteListaComponent } from './components/contratosIntervinientes/intervinientes/intervinienteLista/intervinienteLista.component';
import { IntervinienteRegistroComponent } from './components/contratosIntervinientes/intervinientes/intervinienteRegistro/intervinienteRegistro.component';
import { ContratoListaComponent } from './components/contratosIntervinientes/contratos/contratoLista/contratoLista.component';
import { InicioNavComponent } from './components/inicioApp/inicioNav/inicioNav.component';
import { InicioListaComponent } from './components/inicioApp/inicioLista/inicioLista.component';
import { TipoNavComponent } from './components/tipos/tipoNav/tipoNav.component';
import { BalanceListaComponent } from './components/balances/balanceLista/balanceLista.component';
import { BalanceNavComponent } from './components/balances/balanceNav/balanceNav.component';
import { LoginComponent } from './components/publiRegistros/login/login.component';
import { TipoContratoListaComponent } from './components/tipos/contratos/tipoContratoLista/tipoContratoLista.component';
import { AdministradorRegistroComponent } from './components/usuarios/administradorRegistro/administradorRegistro.component';
import { ModificacionTiposComponent } from './components/tipos/modificacionTipos/modificacionTipos.component';
import { IntervinienteDetalleComponent } from './components/contratosIntervinientes/intervinientes/intervinienteDetalle/intervinienteDetalle.component';
import { IngaNavComponent } from './components/ingresosGastos/ingaNav/ingaNav.component';
import { IngaRegistroGeneralComponent } from './components/ingresosGastos/ingaRegistroGeneral/ingaRegistroGeneral.component';
import { TipoCoceptoListaComponent } from './components/tipos/conceptos/tipoCoceptoLista/tipoCoceptoLista.component';
import { TipoConceptoRegistroComponent } from './components/tipos/conceptos/tipoConceptoRegistro/tipoConceptoRegistro.component';
import { InGaInicioComponent } from './components/ingresosGastos/inGaInicio/inGaInicio.component';
import { IngaDetalleComponent } from './components/ingresosGastos/ingaDetalle/ingaDetalle.component';







@NgModule({
  declarations: [
    AppComponent,
    // Balance ingreso gasto
    BalanceListaComponent,
    BalanceNavComponent,
    IngaNavComponent,
    IngaRegistroGeneralComponent,
    IngaDetalleComponent,
    InGaInicioComponent,
    
    //Clientes
    ClienteDetalleComponent,
    ClienteListaComponent,
    ClienteNavComponent,
    ClienteRegistroComponent,

    //Contratos
    ContratoDetalleComponent,
    ContratoListaComponent,
    ContratoNavComponent,
    ContratoRegistroComponent,

    //Intervinientes
    IntervinienteListaComponent,
    IntervinienteRegistroComponent,
    IntervinienteDetalleComponent,

    //Inicio
    NavAppComponent,
    InicioNavComponent,
    InicioListaComponent,

    //Inmuebles
    InmuebleDetalleComponent,
    InmuebleListaComponent,
    InmuebleNavComponent,
    InmueblesRegistroComponent,

    //PubliRegistro
    PubliInicioComponent,
    PubliNavComponent,
    LoginNavComponent,
    LoginComponent,



    //Tipos  
    TiposComponent,
    TipoNavComponent,
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


    //Usuarios
    UsuarioDetalleComponent,
    UsuarioNavComponent,
    UsuarioListaComponent,
    UsuarioRegistroComponent,
    LoginNavComponent,
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
