// besm allah alrahman alrahem
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events } from '@ionic/angular';
import { TranslateConfigService } from './services/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  textDir = 'ltr';
  menuDir = 'start';
  menuType = 'overlay';
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'BarcodeScanner',
      url: '/barcode-scanner',
      icon: 'qr-scanner'
    },
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'home'
    // },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
    // {
    //   title: 'Profile',
    //   url: '/profile',
    //   icon: 'home'
    // }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events,
    private translateConfigService: TranslateConfigService
  ) {
    this.initializeApp();
    this.translateConfigService.init();
    // setting the text direction and the menu direction
    this.events.subscribe('language', (lng) => {
      // this.updateLang();
      this.textDir = (lng === 'ar') ? 'rtl' : 'ltr';
      this.menuDir = (lng === 'ar') ? 'end' : 'start';
      this.menuType = null;
      // this.menuType = 'overlay';
      setTimeout(() => {
        // setting menu animation
        this.menuType = 'overlay';
      }, 100);
    });


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
