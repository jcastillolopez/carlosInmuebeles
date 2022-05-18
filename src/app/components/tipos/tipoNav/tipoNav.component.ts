import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tipoNav',
  templateUrl: './tipoNav.component.html',
  styleUrls: ['./tipoNav.component.css']
})
export class TipoNavComponent implements OnInit {

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
