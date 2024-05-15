import { Component, OnInit,inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  private _userService = inject(UsersService);
  public status:string;
  public user:User;
  public ListUser:User[];
  

  constructor() { 
    this.status = '';
    this.user = new User(1,'','','','','','',[]);
    this.ListUser = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  public openModal(){

  }

  public getUsers(){
    this._userService.getUsers().subscribe(
      (response:any) => {
        if(response.status == 'success'){
          this.status = 'success';
          this.ListUser = response.users;
          console.log(this.ListUser);
        }
      }
    );
  }

}
