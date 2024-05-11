import { Component, OnInit,inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  private _userService = inject(UsersService);
  public status:string;
  constructor() { 
    this.status = '';
  }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(){
    this._userService.getUsers().subscribe(
      (response:any) => {
        if(response.status == 'success'){
          this.status = 'success';
          console.log(response);
        }
      }
    );
  }

}
