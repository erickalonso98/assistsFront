import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

export const authGuard: CanActivateFn = (route, state) => {

  var _userService = inject(UsersService);
  var _router = inject(Router);
  var identity = _userService.getIdentity();

  if(identity){
    return true;
  }else{
    _router.navigate(['/home']);
    return false
  }
};
