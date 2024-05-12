import { Component, OnInit, inject } from '@angular/core';
import { PermissionsService } from 'src/app/services/permissions.service';

@Component({
  selector: 'app-list-permissions',
  templateUrl: './list-permissions.page.html',
  styleUrls: ['./list-permissions.page.scss'],
})
export class ListPermissionsPage implements OnInit {

  private _permissionsService = inject(PermissionsService);

  constructor() { }

  ngOnInit() {
    this.getPermission();
  }

  public getPermission(){
    this._permissionsService.getPermissions().subscribe(
      (response:any) => {
        if(response){
          console.log(response);
        }
      }
    );
  }

}
