import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { OrderService } from '../../Services/order.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

private readonly formBuilder=inject(FormBuilder)
  isloading:boolean=false;
  messageError!:string;
  Cartid!:string|null;


constructor(private router:Router,private _orderServices:OrderService,private _routerSnap:ActivatedRoute) {
}


ngOnInit(): void {

  this._routerSnap.paramMap.subscribe((x)=>{
    this.Cartid=x.get('id');
  })
}

shippingAddressform= this.formBuilder.group({
  details:[null, [Validators.required]],
  phone:[null, [Validators.required]],
  city:[null, [Validators.required]],
})



Checkout()
{

  this._orderServices.Checkout(this.Cartid!, {
    details: this.shippingAddressform.value.details || '',
    phone: this.shippingAddressform.value.phone || '',
    city: this.shippingAddressform.value.city || ''
  }).subscribe({
    next:(resulte)=>{
      open(resulte.session.url,'_self')
        console.log()
    },
    error:(resulte)=>{
      console.log(resulte)
  }
  })
}




}
