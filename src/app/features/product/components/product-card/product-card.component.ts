import { CartService } from './../../../cart/services/cart.service';
import { Component, inject, Input } from '@angular/core';
import { product } from '../../models/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: product;
  private readonly CartServices = inject(CartService);

  addTocart(id: string) {
    this.CartServices.addProductToCart(id).subscribe({
      next: (resulte) => {
        console.log(resulte);
      },
      error: (resulte) => {
        console.log(resulte);
      },
    });
  }
}
