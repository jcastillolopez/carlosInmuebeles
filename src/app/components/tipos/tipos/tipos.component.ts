import { Component, OnInit } from '@angular/core';
import { PermisosService } from 'src/app/services/Permisos.service';

@Component({
  selector: 'tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit {

  constructor(
    public permisos: PermisosService
  ) { }

  ngOnInit() {
  }

}
