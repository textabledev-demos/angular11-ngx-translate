import { BrowserModule } from '@angular/platform-browser';
import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import '@angular/common/locales/global/cs';
import '@angular/common/locales/global/en';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './components/one.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http, '/assets/translations/json-structured/');
  return new TranslateHttpLoader(http, '/assets/translations/json/');
}

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ],
      },
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'cs' },
    // { provide: LOCALE_ID, useValue: 'en' },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
  constructor(
    private translate: TranslateService,
    @Inject(LOCALE_ID) private locale: string,
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(locale);
  }
}
