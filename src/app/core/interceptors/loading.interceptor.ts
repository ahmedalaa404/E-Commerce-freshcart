import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const Spinner=inject(NgxSpinnerService)

  Spinner.show('span1');
  return next(req).pipe(finalize(()=>{
    Spinner.hide('span1')
  }));


  
};
