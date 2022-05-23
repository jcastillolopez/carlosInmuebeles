import { Component } from '@angular/core';


// const process = require('process');
// require('dotenv').config(".env");
// console.log(process.env.ADMINISTRADORID)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carlos_Inmuebles';
  fechasistema: any;
  constructor(
   
  ) {
     this.fechasistema = new Date;
  }
}
