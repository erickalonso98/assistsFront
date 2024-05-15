import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
    loadChildren: () => import('./components/list-roles/list-roles.module').then( m => m.ListRolesPageModule),
    canActivate: [authGuard] 
  },
  {
    path: 'users-list',
    loadChildren: () => import('./components/users-list/users-list.module').then( m => m.UsersListPageModule),
    canActivate: [authGuard] 
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'super-admin',
    loadChildren: () => import('./components/super-admin/super-admin.module').then( m => m.SuperAdminPageModule),
    canActivate: [authGuard] 
  },
  {
    path: 'list-permissions',
    loadChildren: () => import('./components/list-permissions/list-permissions.module').then( m => m.ListPermissionsPageModule),
    canActivate: [authGuard] 
  },
  {
    path: 'member-list',
    loadChildren: () => import('./components/member-list/member-list.module').then( m => m.MemberListPageModule),
    canActivate: [authGuard] 
  },
  {
    path: 'event',
    loadChildren: () => import('./components/event/event.module').then( m => m.EventPageModule),
    canActivate: [authGuard] 
  },
  {
    path: 'footers',
    loadChildren: () => import('./components/footers/footers.module').then( m => m.FootersPageModule),
    canActivate: [authGuard] 
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [authGuard] 
  },
  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then( m => m.UserPageModule),
    canActivate: [authGuard] 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
