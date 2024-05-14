import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AlertController } from '@ionic/angular';
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
  public roles:any;

  public text:string
  public reserved:string;

  constructor(
    private _router:Router,
    private _alert:AlertController
  ) {
    this.user = new User(1,'','','','','','',[]);
    this.status = '';
    this.token = '';
    this.text = '2024 Erick de Jesus Alonso Angel.';
    this.reserved = 'Todos los derechos reservados';
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

         this.roles =  response.roles;

         if(this.roles[0].name == "Super-Administrador"){
             this._router.navigate(['/super-admin']);
             this.status = 'success';
         }
             this.token = response.token;
             this.identity = response.identity;
    
             console.log(this.token);
             console.log(this.identity);
    
             localStorage.setItem('identity',JSON.stringify(this.identity));
             localStorage.setItem('token',this.token);
          
          form.reset();
        }else{
          this.status = 'error';
        }
      }
    );
  }

}
