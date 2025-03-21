import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';

export const catchErrorInterceptor: HttpInterceptorFn = (req, next) => {





  return next(req).pipe(catchError((error)=>{
    return throwError(()=>error)
  }));
};
