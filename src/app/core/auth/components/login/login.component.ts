import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
private readonly AuthServices=inject(AuthService)
private readonly formBuilder=inject(FormBuilder)
  isloading:boolean=false;
  messageError!:string;



constructor(private router:Router) {


}


authform= this.formBuilder.group({
  email:[null, [Validators.required, Validators.email]],
  password:[null, [Validators.required, Validators.minLength(8)]],
})




login()
{
  if(this.authform.valid&&!this.isloading)
  {
    console.log(this.authform.value);
    this.isloading=true;
   this.AuthServices.login(this.authform.value).subscribe({
      next:(res)=>{
        this.isloading=false;
       this.AuthServices.saveToken(res.token);
       this. router.navigate(['/home'])
      },
      error:(err)=>{
        console.log(err);
        this.messageError=err.error.message;
        this.isloading=false;
      }
   })
  }
  this.authform.markAllAsTouched();
}

}
