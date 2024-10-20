import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TranslateConfigService } from './translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    {
      title: 'scale-pthongs',
      url: '/scale-pthongs',
      icon: 'podium-outline',
    },
    {
      title: 'chant-system',
      url: '/chant-system',
      icon: 'musical-notes-outline',
    },
    {
      title: 'characters-quantity',
      url: '/characters-quantity',
      icon: 'cube-outline',
    },
  ];

  private onLangChange: Subscription = new Subscription();

  constructor(
    private translate: TranslateService,
    private translateConfigService: TranslateConfigService,
    private el: ElementRef
  ) {
    this.translateConfigService.setLanguage('el');
  }

  ngOnInit() {
    this.onLangChange = this.translate.onLangChange.subscribe(() => {
      this.updateLanguage();
    });
  }

  updateLanguage() {
    const lang = document.createAttribute('lang');
    lang.value = this.translate.currentLang;
    this.el.nativeElement.parentElement.parentElement.attributes.setNamedItem(
      lang
    );
  }

  ngOnDestroy(): void {
    this.onLangChange?.unsubscribe();
  }
}
