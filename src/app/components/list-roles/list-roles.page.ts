import { Component, OnInit, inject } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.page.html',
  styleUrls: ['./list-roles.page.scss'],
})
export class ListRolesPage implements OnInit {

  private _rolesService = inject(RolesService);
  public roles:Role[];

  constructor() { }

  ngOnInit() {
    this.GetRoles();
  }

  public GetRoles(){
    this._rolesService.getRoles().subscribe(
      (response:any) => {
        if(response){
          this.roles = response.roles;
          console.log(this.roles);
        }
      }
    );
  }

}
