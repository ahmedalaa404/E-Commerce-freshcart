import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Cart.interaface';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() product!: Product;

  @Output() productId = new EventEmitter<string>();
  @Output() updateProductQuantity = new EventEmitter<{
    id: string;
    count: number;
  }>();

  removeItem() {
    console.log(this.product.product.id);
    this.productId.emit(this.product.product.id);
  }


  onUpdate(newCount:number)
  {
    this.updateProductQuantity.emit({
      id:this.product.product.id,count:newCount
    });
  }
}
