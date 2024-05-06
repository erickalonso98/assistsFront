import { Injectable, inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _http = inject(HttpClient);
  public url:string;
  public token:string;
  public identity:string;

  constructor() {
    this.url = global.url;
    this.token = '';
    this.identity = '';
   }

   public getUsers(){
      return this._http.get<User[]>(`${this.url}/users`);
   }

   public getUser(id:number){
      return this._http.get<User[]>(`${this.url}/user/${id}`);
   }

   public login(email:string,password:string){
      var params = {
         email:email,
         password:password
      };

      var json = JSON.stringify(params);
      var headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(`${this.url}/login/`,json,{headers});
   }
}
