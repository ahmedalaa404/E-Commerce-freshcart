import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

private readonly activeRoute=inject(ActivatedRoute);


getProductId()
{


  console.log(this.activeRoute.snapshot.paramMap.get('id'));
  console.log(this.activeRoute.snapshot.params['id']);
  // this.activeRoute.paramMap.subscribe(data=>{
  //   console.log(data.get('id'));

  // })
}


ngOnInit(): void {
  this.getProductId();
}
}
