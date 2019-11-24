//besm allah alrahman alrahem
import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedLanguage:string;

  constructor(private translateConfigService: TranslateConfigService) { 
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();

  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
  ngOnInit() {
  }

}
