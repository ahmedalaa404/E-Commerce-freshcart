import { Component } from '@angular/core';
 import {FormControl, FormGroup, ReactiveFormsModule,Validators   } from '@angular/forms'
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
authform= new FormGroup({
  name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  rePassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  phone: new FormControl(null, [Validators.required, Validators.minLength(3)])
})










}
