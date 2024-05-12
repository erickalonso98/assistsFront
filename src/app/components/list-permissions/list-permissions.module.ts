import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPermissionsPageRoutingModule } from './list-permissions-routing.module';

import { ListPermissionsPage } from './list-permissions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPermissionsPageRoutingModule
  ],
  declarations: [ListPermissionsPage]
})
export class ListPermissionsPageModule {}
