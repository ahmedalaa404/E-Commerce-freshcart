import { HttpInterceptorFn } from '@angular/common/http';
import { Inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

const AuthServices=Inject(AuthService)

if(req.url.includes('cart')||req.url.includes('order'))
{
  req=req.clone({
    setHeaders :{
      token:AuthServices.getToken()!
    }
  })
}

  return next(req);
};
