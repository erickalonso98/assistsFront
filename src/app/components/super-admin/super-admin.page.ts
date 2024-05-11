import { Component, OnInit,inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage implements OnInit {

  public title:string;
  private _userService = inject(UsersService);

  constructor() { 
    this.title = 'Bienvenido Administrador';
  }

  ngOnInit() {
  }

  public logouts(){
    this._userService.logout();
  }

}
