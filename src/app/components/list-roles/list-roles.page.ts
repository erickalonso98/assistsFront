import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.page.html',
  styleUrls: ['./list-roles.page.scss'],
})
export class ListRolesPage implements OnInit {

  constructor(private _rolesService:RolesService) { }

  ngOnInit() {
    this.GetRoles();
  }

  public GetRoles(){
    this._rolesService.getRoles().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
