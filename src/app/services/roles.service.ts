import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { Role } from '../models/Role';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private _http = inject(HttpClient);
  private _userService = inject(UsersService);
  public url:string;
  constructor() {
    this.url = global.url;
   }

   public getRoles(){
    var headers = this._userService.getHeaders();
    return this._http.get<Role[]>(`${this.url}/roles`,{ headers });
   }

}
