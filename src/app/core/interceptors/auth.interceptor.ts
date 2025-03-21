import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

const AuthServices=inject(AuthService)


if(req.url.includes('cart')||req.url.includes('order'))
{
  console.log(AuthServices.getToken())
  console.log(AuthServices)
  req=req.clone({
    setHeaders :{
      token:AuthServices.getToken()!
    }
  })
}

  return next(req);
};
