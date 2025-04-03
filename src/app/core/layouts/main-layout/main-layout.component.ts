import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  GoToUp() {
    scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  showButton:boolean = false; // property to show/hide button

  @HostListener('window:scroll') scrollTotOP(){ // method Decorator
    const scrollTop = document.documentElement.scrollTop;


    if(scrollTop>500)
    {
      this.showButton=true;
    }
    else
    {
      this.showButton=false;
    }
  }
}
