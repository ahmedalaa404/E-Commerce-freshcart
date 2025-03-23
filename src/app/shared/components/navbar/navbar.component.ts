import { AuthService } from './../../../core/auth/services/auth.service';
import { Component, Input, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../features/cart/services/cart.service';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationsServicesService } from '../../../core/services/translations-services.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive,TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  counter: number = 0;
  private readonly AuthService = inject(AuthService);
  private readonly CartService = inject(CartService);

  private readonly translateServices=inject(TranslationsServicesService);

  private readonly PlatformId = inject(PLATFORM_ID);
  @Input() layout!: string;

  isAuth: boolean = true;

  ngOnInit(): void {
    this.AuthService.decodeToken();

    if (isPlatformBrowser(this.PlatformId)) {
      this.CartService.getLoggedCart().subscribe({
        next: (resulte) => {
          this.CartService.Counter.next(resulte.numOfCartItems);
        },
      });
    }

    this.CartService.Counter.subscribe({
      next: (responce) => {
        console.log(responce);
        this.counter = responce;
      },
    });
  }

  logout() {
    this.AuthService.logout();
  }


  selectedLanguage(lng:string)
  {
    this.translateServices.changeLang(lng)
  }
}
