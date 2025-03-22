import { AuthService } from './../../../core/auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  Counter:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  private readonly AuthService = inject(AuthService);
  constructor(private HttpClient: HttpClient) {}


  addProductToCart(ProductId: String): Observable<any> {
    return this.HttpClient.post(
      environment.baseUrl + 'cart',
      {
        productId: ProductId,
      },
      {
        headers: {
          token: this.AuthService.getToken()!,
        },
      }
    ); //must take 2 argumnent - url + body
  }

  UpdateCart(count: number, productId: String): Observable<any> {
    return this.HttpClient.put(
      environment.baseUrl + 'cart/' + productId,
      {
        count,
      }
    );
  }

  getLoggedCart(): Observable<any> {
    return this.HttpClient.get(environment.baseUrl + 'cart');
  }

  removeCartItem(ProductId: string): Observable<any> {
    return this.HttpClient.delete(environment.baseUrl + 'cart/' + ProductId);
  }



  clearCart(): Observable<any> {
    return this.HttpClient.delete(environment.baseUrl + 'cart');
  }





}
