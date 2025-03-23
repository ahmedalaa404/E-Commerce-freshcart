import { product } from '../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../../../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../../../../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,SearchPipe,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  private readonly ProductsService = inject(ProductsService);
  private readonly toastr = inject(ToastrService);
    valueSearch:string="";
  allProduct: product[] = [];


  showSuccess() {
    this.toastr.success('Product Is Add To Cart Success', 'Process Is Success');
  }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ProductsService.getproducts().subscribe((data) => {
      this.allProduct = data.data;


    });
  }
  private readonly CartServices = inject(CartService);

  addToCart(id: string) {
    this.CartServices.addProductToCart(id).subscribe({
      next: (resulte) => {
        this.CartServices.Counter.next(resulte.numOfCartItems )  ;
        this.showSuccess();
        console.log(resulte);
      },
      error: (resulte) => {
        console.log(resulte);
      },
    });
  }
}
