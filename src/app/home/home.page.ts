import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title:string;
  public text:string
  public reserved:string;
  constructor(private _router:Router) {
    this.title = "Aplicacion de Asistencias";
    this.text = '2024 Erick de Jesus Alonso Angel.';
    this.reserved = 'Todos los derechos reservados';
  }

  public toLogin(){
    this._router.navigate(['/login']);
  }

}
