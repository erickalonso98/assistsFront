import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title:string;
  constructor(private _router:Router) {
    this.title = "Aplicacion de Asistencias";
  }

  public toLogin(){
    this._router.navigate(['/login']);
  }

}
