import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-roles',
    loadChildren: () => import('./components/list-roles/list-roles.module').then( m => m.ListRolesPageModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('./components/users-list/users-list.module').then( m => m.UsersListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'super-admin',
    loadChildren: () => import('./components/super-admin/super-admin.module').then( m => m.SuperAdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
