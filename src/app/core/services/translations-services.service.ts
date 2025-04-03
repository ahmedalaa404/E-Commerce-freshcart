import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationsServicesService {
  private translateService = inject(TranslateService);
  defaultLang = 'en';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {


    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lng');
      if (savedLang) {
        this.defaultLang = savedLang;
      }
      this.translateService.setDefaultLang(this.defaultLang);
      this.translateService.use(this.defaultLang);
      this.changeDirection(this.defaultLang);
    }
  }



  changeLang(lang: string) {
    this.translateService.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lng', lang);

      this.changeDirection(lang)
    }

  }


  changeDirection(lang: string) {
    if (lang == 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    }
    else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }

  }






}
