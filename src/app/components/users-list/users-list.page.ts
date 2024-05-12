import { Component, OnInit,inject, ViewChild, AfterViewInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
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
  public name: string;
  public ListUser:User[];
  public message:string;

  @ViewChild(IonModal) modal: IonModal;

  constructor() { 
    this.status = '';
    this.name = '';
    this.user = new User(1,'','','','','','',[]);
    this.message = '';
  }

  ngOnInit() {
    this.getUsers();
  }

  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
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

  public onSubmit(form:NgForm){

  }

}
