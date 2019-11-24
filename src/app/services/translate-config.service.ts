// besm allah alrahman alrahem
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Events, IonItem } from '@ionic/angular';
import { AppPage } from 'e2e/src/app.po';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  defaultLang = '';

  constructor(private translate: TranslateService, public events: Events,
  ) {
    this.init();
  }


  init() {
    this.translate.setDefaultLang(this.getDefaultLanguage());
  }
  getDefaultLanguage() {
    let language = 'en';
    if (this.defaultLang !== '') {
      language = this.defaultLang;
    } else {
      this.defaultLang = 'en';
    }
    return language;
  }

  setLanguage(setLang) {
    this.defaultLang = setLang;
    this.translate.use(setLang);
    // update menu
    this.events.publish('language', setLang);

  }


}


