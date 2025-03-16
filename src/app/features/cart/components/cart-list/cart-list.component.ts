import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/Cart.interaface';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  imports: [CartItemComponent,RouterLink ],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {


private readonly cartServices=inject(CartService);
isloading:boolean=false;
cartDetails:Cart={} as Cart;
ngOnInit(): void {
  this.loadCart()
}


loadCart(){
  this.cartServices.getLoggedCart().subscribe({
    next:(repsonce)=>{
      this.cartDetails=repsonce;
      this.isloading=true;
      console.log(repsonce)
    },
    error:(repsonce)=>{
      console.log(repsonce)
    }
  })
}


removeProduct(id:string)
{
  this.cartServices.removeCartItem(id).subscribe({
    next:(responce)=>{
      console.log(responce)
    }
    ,
    error:(responce)=>{
      console.log(responce)
    }
    ,
  })
}





}
