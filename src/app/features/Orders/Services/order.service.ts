import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {shippingAddress} from '../Models/shipping-address/shippingAddress.interface'
import { AuthService } from '../../../core/auth/services/auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _httpclint:HttpClient, private _authService: AuthService) { }


Checkout(CartId:string,shippingAddress:shippingAddress ):Observable<any>
{
  const baseUrl:string="?url=http://localhost:4200";
  return this._httpclint.post(environment.baseUrl + 'orders/checkout-session/' + CartId+baseUrl, {
    shippingAddress: shippingAddress
  });
}
}
