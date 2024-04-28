import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  public url:string;
  constructor(private _http:HttpClient) {
    this.url = global.url;
   }

   public getRoles():Observable<any>{
    return this._http.get(`${this.url}/roles`);
   }

}
