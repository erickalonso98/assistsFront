import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user:User;

  constructor(
    private _userService:UsersService,
    private _router:Router
  ) {
    this.user = new User(0,'','','','','','',[]);
   }

  ngOnInit() {
  }

  public loginSubmit(){
    this._userService.login(this.user).subscribe(
      (response) => {
        if(response){
          console.log(response);
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
