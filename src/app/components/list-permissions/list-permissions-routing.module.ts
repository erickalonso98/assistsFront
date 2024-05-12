import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPermissionsPage } from './list-permissions.page';

const routes: Routes = [
  {
    path: '',
    component: ListPermissionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPermissionsPageRoutingModule {}
