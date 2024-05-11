import { Injectable, inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { global } from './global';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _http = inject(HttpClient);
  public url:string;
  public token:string;
  public identity:any;

  constructor(private _router:Router) {
    this.url = global.url;
    this.token = '';
   }

   public getUsers(){
      var headers = this.getHeaders();
      return this._http.get<User[]>(`${this.url}/users`,{ headers });
   }

   public getUser(id:number){
      var headers = this.getHeaders();
      return this._http.get<User[]>(`${this.url}/user/${id}`,{ headers });
   }


   public removeUser(id:number){
      var headers = this.getHeaders();
      return this._http.delete(`${this.url}/delete-user/${id}`,{ headers });
   }

   public register(user:User){
      var headers = this.getHeaders().set('Content-Type','application/json');
      var json = JSON.stringify(user);
      return this._http.post(`${this.url}/register`,json,{ headers });
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

   public logout(){
      localStorage.removeItem('identity');
      localStorage.removeItem('token');

      this.token = '';
      this.identity = null;
      
      this._router.navigate(['/login']);
   }

   public getIdentity(){
      var identity = localStorage.getItem('identity');

      if(identity && identity != 'undefined'){
        this.identity = identity = JSON.parse(identity);
      }else{
         this.identity = null;
      }

      return this.identity;
   }

   public getToken(){
      var token = localStorage.getItem('token');

      if(token && token != 'undefined'){
         this.token = token;
      }else{
         this.token = "";
      }

      return this.token;
   }

   public getHeaders(){
      var token = this.getToken();

      if(token){
         return new HttpHeaders({'Authorization':`Bearer ${token}`});
      }else{
         return new HttpHeaders();
      }
   }
}
