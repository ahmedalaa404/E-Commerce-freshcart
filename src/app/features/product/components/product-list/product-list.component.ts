import { product } from '../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  private readonly ProductsService=inject(ProductsService);
allProduct:product[]=[];



  getAllProducts()
  {
    this.ProductsService.getproducts().subscribe((data)=>{

      this.allProduct=data.data;
    })
  }

  ngOnInit(): void {
   this.getAllProducts()
  }
  // constructor(private ) {

  // }
}
