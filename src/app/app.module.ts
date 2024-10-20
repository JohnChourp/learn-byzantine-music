import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChantStructuralPage } from './chant-system/chant-system.page';
import { CharactersQuantityPage } from './characters-quantity/characters-quantity.page';
import { HomePage } from './home/home.page';
import { ScalePthongsPage } from './scale-pthongs/scale-pthongs.page';
import { TranslateConfigService } from './translate-config.service';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,

    HomePage,

    ScalePthongsPage,

    ChantStructuralPage,
    
    CharactersQuantityPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: LanguageLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    TranslateConfigService,
    provideHttpClient(withInterceptorsFromDi()),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
