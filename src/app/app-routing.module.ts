import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Registro_inmuebleComponent } from './components/registros/inmuebles/registro_inmueble/registro_inmueble.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },

  { path: 'registro/inmueble', component: Registro_inmuebleComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
