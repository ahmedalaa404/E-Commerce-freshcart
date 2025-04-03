import { product } from '../../models/product';
import { ProductsService } from './../../services/products.service';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, signal, WritableSignal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../../../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../../../../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { SIGNAL } from '@angular/core/primitives/signals';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,SearchPipe,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush // Input , output , any events
})
export class ProductListComponent  implements OnDestroy{

  private readonly ProductsService = inject(ProductsService);
  private readonly toastr = inject(ToastrService);
    valueSearch:string="";
    allProduct: WritableSignal<product[]>= signal([]);
    counter:WritableSignal<number>=signal<number>(0)  // this make init value
    private readonly CartServices = inject(CartService);
  showSuccess() {
    this.toastr.success('Product Is Add To Cart Success', 'Process Is Success');
  }


  CancleSubscription:Subscription= new Subscription();

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.CancleSubscription= this.ProductsService.getproducts().subscribe((data) => {
      this.allProduct .set( data.data);


    });
  }


  addToCart(id: string) {
    this.CartServices.addProductToCart(id).subscribe({
      next: (resulte) => {
        this.CartServices.Counter.set(resulte.numOfCartItems )  ;
        this.showSuccess();
        console.log(resulte);
      },
      error: (resulte) => {
        console.log(resulte);
      },
    });
  }


  ChangeCounter()
  {
    this.counter.update (x=>x+1 )
  }
  ngOnDestroy(): void {

    this.CancleSubscription.unsubscribe();

  }

}
