import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { global } from './global';
import { Permission } from '../models/Permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  public url:string;
  private _http = inject(HttpClient);
  private _userService = inject(UsersService);

  constructor() {
    this.url = global.url;
   }

   public getPermissions(){
      var headers = this._userService.getHeaders();
      return this._http.get<Permission[]>(`${this.url}/permissions`,{ headers });
   }
}
