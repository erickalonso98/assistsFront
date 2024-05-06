import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private _http = inject(HttpClient);
  public url:string;
  constructor() {
    this.url = global.url;
   }

   public getRoles(){
    return this._http.get<User[]>(`${this.url}/roles`);
   }

}
