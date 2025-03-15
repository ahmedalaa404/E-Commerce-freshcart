import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const isloggedGuard: CanActivateFn = (route, state) => {
  let authSerevice = inject(AuthService);

  let router = inject(Router);

  if (!authSerevice.isAuth()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
