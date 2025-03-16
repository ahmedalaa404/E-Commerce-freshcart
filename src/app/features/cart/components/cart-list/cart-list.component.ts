import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/Cart.interaface';

@Component({
  selector: 'app-cart-list',
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {


private readonly cartServices=inject(CartService);

cartDetails:Cart={} as Cart;
ngOnInit(): void {
  this.loadCart()
}


loadCart(){
  this.cartServices.getLoggedCart().subscribe({
    next:(repsonce)=>{
      this.cartDetails=repsonce;
      console.log(repsonce)
    },
    error:(repsonce)=>{
      console.log(repsonce)
    }
  })
}

}
