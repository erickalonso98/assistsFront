import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url:string;
  public token:string;
  public identity:any;

  constructor(private _http:HttpClient) {
    this.url = global.url;
    this.token = '';
   }

   public getUsers():Observable<any>{
      return this._http.get(`${this.url}/users`);
   }

   public getUser(id:number):Observable<any>{
      return this._http.get(`${this.url}/user/${id}`);
   }

   public login(user:any):Observable<any>{
      let userForm = JSON.stringify(user);
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(`${this.url}/login/`,userForm,{headers});
   }
}
