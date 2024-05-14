import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.page.html',
  styleUrls: ['./footers.page.scss'],
})
export class FootersPage implements OnInit {

  public text:string
  public reserved:string;
  constructor() {
    this.text = '2024 Erick de Jesus Alonso Angel.';
    this.reserved = 'Todos los derechos reservados';
   }

  ngOnInit() {
  }

}
