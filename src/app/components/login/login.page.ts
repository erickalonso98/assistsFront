import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user:User;
  private _userService = inject(UsersService);
  public status:string;
  public token:string;
  public identity:any;

  constructor(
    private _router:Router
  ) {
    this.user = new User(1,'','','','','','',[]);
    this.status = '';
    this.token = '';
   }

  ngOnInit() {
  }

  public onSubmit(form:NgForm){
    
    console.log("email:",this.user.email);
    console.log("password:",this.user.password);

    this._userService.login(this.user.email,this.user.password).subscribe(
      (response:any) => {
        if(response){
         console.log(response);

         this.token = response.token;
         this.identity = response.identity;

         console.log(this.token);
         console.log(this.identity);

         localStorage.setItem('identity',JSON.stringify(this.identity));
         localStorage.setItem('token',this.token);

          this.status = 'success';
          form.reset();
        }else{
          this.status = 'error';
        }
      }
    );
  }

}
