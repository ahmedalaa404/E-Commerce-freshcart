import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { StockStatusPipe } from '../../../../shared/pipes/stock-status.pipe'

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, DatePipe, CurrencyPipe, UpperCasePipe, SlicePipe, StockStatusPipe],
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
