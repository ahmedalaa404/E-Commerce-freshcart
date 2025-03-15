import { AuthService } from './../../../core/auth/services/auth.service';
import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private readonly AuthService =inject(AuthService)
@Input() layout!:string;

  isAuth:boolean=true




  ngOnInit(): void {

    this.AuthService.decodeToken();
  }

logout(){
  this.AuthService.logout();
}


}
