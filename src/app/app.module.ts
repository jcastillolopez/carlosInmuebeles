import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Registro_inmuebleComponent } from './components/registros/inmuebles/registro_inmueble/registro_inmueble.component';
import { Listado_inmuebleComponent } from './components/listados/listado_inmueble/listado_inmueble.component';
import { Listado_inmueble_detalleComponent } from './components/listado_detalle/listado_inmueble_detalle/listado_inmueble_detalle.component';


@NgModule({
  declarations: [	
    AppComponent,
    Registro_inmuebleComponent,
    Listado_inmuebleComponent,
    Listado_inmueble_detalleComponent,
     
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
