import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/Cart.interaface';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-cart-list',
  imports: [CartItemComponent, RouterLink],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
})
export class CartListComponent {
  private readonly cartServices = inject(CartService);
  isloading: boolean = false;
  cartDetails: Cart = {} as Cart;

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartServices.getLoggedCart().subscribe({
      next: (repsonce) => {
        this.cartDetails = repsonce;
        this.isloading = true;
        this.cartServices.Counter.next(repsonce.numOfCartItems )  ;
        console.log(repsonce);
      },
      error: (repsonce) => {
        console.log(repsonce);
      },
    });
  }

  removeProduct(id: string) {
    this.cartServices.removeCartItem(id).subscribe({
      next: (responce) => {
        this.cartDetails = responce;
        this.cartServices.Counter.next(responce.numOfCartItems )  ;
        console.log(responce);
      },
      error: (responce) => {
        console.log(responce);
      },
    });
  }

  updateQuantity(id: string, count: number) {
    this.cartServices.UpdateCart(count, id).subscribe({
      next: (responce) => {
        this.cartDetails = responce;

        console.log(responce);
      },
      error: (responce) => {
        console.log(responce);
      },
    });
  }

  ClearCart() {

    this.cartServices.clearCart().subscribe({
      next:(responce)=>{
        this.cartServices.Counter.next(responce.numOfCartItems )  ;
        this.loadCart();
      },
      error:(responce)=>{
        console.log(responce)
      }
    });
  }
}

