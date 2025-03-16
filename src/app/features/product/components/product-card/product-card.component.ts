import { Component, EventEmitter, Input, Output,  } from '@angular/core';
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
  @Output() OnAddCartProduct = new EventEmitter<string>()

  onAddCart()
  {
    this.OnAddCartProduct.emit(this.product._id);
  }


}
