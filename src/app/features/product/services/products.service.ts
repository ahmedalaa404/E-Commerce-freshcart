import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  baseurl:string=environment.baseUrl;
  constructor(private _httpclint:HttpClient) {



   }




   getproducts():Observable<any>
   {
    return this._httpclint.get(this.baseurl+"products");
   }


   getproductDetails(Id:string):Observable<any>
   {
    return this._httpclint.get(this.baseurl+"products/"+Id);
   }


}
