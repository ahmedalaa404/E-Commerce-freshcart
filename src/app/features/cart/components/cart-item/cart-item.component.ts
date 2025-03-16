
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Cart.interaface';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
@Input() product!:Product;

@Output() productId=new EventEmitter<string>();



removeItem()
{
  console.log(this.product._id)
  this.productId.emit(this.product._id)
}

}
