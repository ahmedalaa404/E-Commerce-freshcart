import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclint :HttpClient) { }


register(data:any):Observable<any>
{

  return this.httpclint.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
}



login(data:any):Observable<any>
{

  return this.httpclint.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
}






}
