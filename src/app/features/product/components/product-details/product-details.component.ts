import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { product } from '../../models/product';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  private readonly activeRoute = inject(ActivatedRoute);
  private readonly productservices = inject(ProductsService);

  productDetails: product = {} as product;
  productId!: string | null;

  getProductId() {
    // console.log(this.activeRoute.snapshot.paramMap.get('id'));
    // console.log(this.activeRoute.snapshot.params['id']);
    this.activeRoute.paramMap.subscribe((data) => {
      this.productId = data.get('id');
    });
  }

  getProductDetails(id: string | null) {
    this.productservices.getproductDetails(id).subscribe((data) => {
      this.productDetails = data.data;
    });
  }

  ngOnInit(): void {
    this.getProductId();
    this.getProductDetails(this.productId);
  }





}
