import { AuthService } from './../../../core/auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
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
      },

      {
        headers: {
          token: this.AuthService.getToken()!,
        },
      }
    );
  }

  getLoggedCart(): Observable<any> {
    return this.HttpClient.get(environment.baseUrl + 'cart', {
      headers: {
        token: this.AuthService.getToken()!,
      },
    });
  }

  removeCartItem(ProductId: string): Observable<any> {
    return this.HttpClient.delete(environment.baseUrl + 'cart/' + ProductId, {
      headers: {
        token: this.AuthService.getToken()!,
      },
    });
  }



  clearCart(): Observable<any> {
    return this.HttpClient.delete(environment.baseUrl + 'cart', {
      headers: {
        token: this.AuthService.getToken()!,
      },
    });
  }





}
