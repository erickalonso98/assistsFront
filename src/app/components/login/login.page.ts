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

  constructor(
    private _router:Router
  ) {
    this.user = new User(0,'','','','','','',[]);
    this.status = '';
   }

  ngOnInit() {
  }

  public onSubmit(form:NgForm){
    
    console.log("email:",this.user.email);
    console.log("password:",this.user.password);

    this._userService.login(this.user.email,this.user.password).subscribe(
      (response) => {
        if(response){
          console.log(response);
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'error';
        }
      }
    );
  }

}
