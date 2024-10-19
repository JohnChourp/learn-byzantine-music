import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateConfigService {
  constructor(private translate: TranslateService) {}

  getDefaultLanguage(): string {
    const default_save_lang = window.localStorage.getItem('default_language');
    let language = 'el';

    if (default_save_lang) {
      try {
        language = JSON.parse(default_save_lang) as string;
      } catch (e) {
        console.error('Error parsing language from localStorage:', e);
      }
    } else {
      language = this.translate.getBrowserLang() || 'el';
    }

    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang: string) {
    this.translate.use(setLang);
    window.localStorage.setItem('default_language', JSON.stringify(setLang));
  }
}
