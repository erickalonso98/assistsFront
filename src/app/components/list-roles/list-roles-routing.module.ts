import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRolesPage } from './list-roles.page';

const routes: Routes = [
  {
    path: '',
    component: ListRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRolesPageRoutingModule {}
