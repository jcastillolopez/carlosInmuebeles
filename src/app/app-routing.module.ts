import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Listado_inmuebleComponent } from './components/listados/listado_inmueble/listado_inmueble.component';
import { Listado_inmueble_detalleComponent } from './components/listado_detalle/listado_inmueble_detalle/listado_inmueble_detalle.component';
import { Registro_inmuebleComponent } from './components/registros/inmuebles/registro_inmueble/registro_inmueble.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },


  {
    path: 'Inmuebles', component: Listado_inmuebleComponent, children:[
      { path: 'detalle/:id', component: Listado_inmueble_detalleComponent },
      { path: 'registro', component: Registro_inmuebleComponent },
      { path: 'registro/:id', component: Registro_inmuebleComponent },
  ] },
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
