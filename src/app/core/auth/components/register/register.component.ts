import { Component, inject } from '@angular/core';
 import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule,Validators   } from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private readonly AuthServices=inject(AuthService)
  isloading:boolean=false;
  messageError!:string;



constructor(private router:Router) {


}


authform= new FormGroup({
  name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  rePassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  phone: new FormControl(null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/
)]),
},{validators:this.passwordMatchValidator})


passwordMatchValidator(control:AbstractControl)
{
  let password=control.get('password')?.value;
  let rePassword=control.get('rePassword')?.value;
  if(password !== rePassword)
  {
    control.get('rePassword')?.setErrors({passwordMatch:true})
  }
return null
}






onSubmit()
{
  if(this.authform.valid&&!this.isloading)
  {
    this.isloading=true;
   this.AuthServices.register(this.authform.value).subscribe({
      next:(res)=>{
        this.isloading=false;
       this. router.navigate(['/login'])
      },
      error:(err)=>{
        this.messageError=err.error.message;
        this.isloading=false;
      }
   })
  }
  this.authform.markAllAsTouched();
}

}
