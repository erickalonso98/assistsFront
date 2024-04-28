import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRolesPageRoutingModule } from './list-roles-routing.module';

import { ListRolesPage } from './list-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRolesPageRoutingModule
  ],
  declarations: [ListRolesPage]
})
export class ListRolesPageModule {}
