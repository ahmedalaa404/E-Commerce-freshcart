import { DefaultLangChangeEvent } from './../../node_modules/@ngx-translate/core/lib/translate.service.d';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './core/interceptors/auth.interceptor';

import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}


export const appConfig: ApplicationConfig = {

  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideClientHydration(withEventReplay())
     ,provideHttpClient(withFetch(),withInterceptors([authInterceptor,loadingInterceptor])
     ),
     importProvidersFrom(BrowserAnimationsModule),
     provideToastr(),
     importProvidersFrom(NgxSpinnerModule,TranslateModule.forRoot({
      defaultLanguage:'ar',

      loader:{

        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
     }))

    ],
};
