import { Component, OnInit, inject } from '@angular/core';
import { PermissionsService } from 'src/app/services/permissions.service';
import { Permission } from 'src/app/models/Permission';

@Component({
  selector: 'app-list-permissions',
  templateUrl: './list-permissions.page.html',
  styleUrls: ['./list-permissions.page.scss'],
})
export class ListPermissionsPage implements OnInit {

  private _permissionsService = inject(PermissionsService);
  public permissions:Array<Permission>;

  constructor() {
    this.permissions = [];
   }

  ngOnInit() {
    this.getPermission();
  }

  public getPermission(){
    this._permissionsService.getPermissions().subscribe(
      (response:any) => {
        if(response){
          this.permissions = response.permissions;
          console.log(this.permissions);
        }
      }
    );
  }

}
