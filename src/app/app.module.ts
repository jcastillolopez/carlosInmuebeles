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
import { NavAppComponent } from './components/inicio/generalNav/navApp.component';
import { PubliInicioComponent } from './components/publiRegistros/publicidad/publiInicio/publiInicio.component';
import { PubliNavComponent } from './components/publiRegistros/publicidad/publiNav/publiNav.component';
import { LoginNavComponent } from './components/publiRegistros/loginNav/loginNav.component';
import { RolListaComponent } from './components/tipos/roles/rolLista/rolLista.component';
import { RolRegistroComponent } from './components/tipos/roles/rolRegistro/rolRegistro.component';
import { PeriodoListaComponent } from './components/tipos/periodos/periodoLista/periodoLista.component';
import { PeriodoRegistroComponent } from './components/tipos/periodos/periodoRegistro/periodoRegistro.component';
import { IntervinienteListaComponent } from './components/tipos/intervinientes/intervinienteLista/intervinienteLista.component';
import { IntervinienteRegistroComponent } from './components/tipos/intervinientes/intervinienteRegistro/intervinienteRegistro.component';
import { TipoInmuebleListaComponent } from './components/tipos/inmuebles/tipoInmuebleLista/tipoInmuebleLista.component';
import { TipoInmuebleRegistroComponent } from './components/tipos/inmuebles/tipoInmuebleRegistro/tipoInmuebleRegistro.component';
import { ContratoListaComponent } from './components/tipos/contratos/contratoLista/contratoLista.component';
import { ContratoRegistroComponent } from './components/tipos/contratos/contratoRegistro/contratoRegistro.component';
import { TiposComponent } from './components/tipos/tipos/tipos.component';
import { ContratoDetalleComponent } from './components/contratos/contratos/contratoDetalle/contratoDetalle.component';
import { ContratoNavComponent } from './components/contratos/contratos/contratoNav/contratoNav.component';




@NgModule({
  declarations: [
    AppComponent,


    //Clientes
    ClienteDetalleComponent,
    ClienteListaComponent,
    ClienteNavComponent,
    ClienteRegistroComponent,

    //Contratos
    ContratoListaComponent,
    ContratoDetalleComponent,
    ContratoRegistroComponent,
    ContratoNavComponent,
  
    //Intervinientes
    IntervinienteListaComponent,
    IntervinienteRegistroComponent,

    //Inicio
    NavAppComponent,

    //Inmuebles
    InmuebleDetalleComponent,
    InmuebleListaComponent,
    InmuebleNavComponent,
    InmueblesRegistroComponent,

    //PubliRegistro
    PubliInicioComponent,
    PubliNavComponent,
    LoginNavComponent,


    //Tipos  
    TiposComponent,
    RolListaComponent,
    RolRegistroComponent,
    PeriodoListaComponent,
    PeriodoRegistroComponent,
    IntervinienteListaComponent,
    IntervinienteRegistroComponent,
    TipoInmuebleListaComponent,
    TipoInmuebleRegistroComponent,
    ContratoListaComponent,
    ContratoRegistroComponent,
  

    //Usuarios
    UsuarioDetalleComponent,
    UsuarioNavComponent,
    UsuarioListaComponent,
    UsuarioRegistroComponent


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
