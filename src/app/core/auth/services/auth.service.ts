import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpclint: HttpClient) {}

  private readonly router = inject(Router);

  register(data: any): Observable<any> {
    return this.httpclint.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      data
    );
  }

  login(data: any): Observable<any> {
    return this.httpclint.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      data
    );
  }

  decodeToken() {
    if (typeof localStorage !== 'undefined') {
      try {
        const token = localStorage.getItem('AuthtokenFlowCart');
        const decoded = jwtDecode(token!);

        console.log(decoded);
      } catch {
        console.log('Token is not valid');
      }
    }
  }

  saveToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('AuthtokenFlowCart', token);
    }
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('AuthtokenFlowCart');
    } else return null;
  }

  isAuth(): boolean {
    if (typeof localStorage !== 'undefined') {
      // return localStorage.getItem('AuthtokenFlowCart')?true:false; // readable line in code
      return !!localStorage.getItem('AuthtokenFlowCart'); // true or false
    }
    return false;
  }

  logout() {
    localStorage.removeItem('AuthtokenFlowCart');
    this.router.navigate(['/login']);
  }



}
