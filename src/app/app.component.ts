import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  param = {
    value: 'world'
  };
  wrongParam = {
    wrong: 'world'
  };

  constructor(private translateService: TranslateService) {
  }

  onChangeLanguage(event: MouseEvent, lang: string) {
    event.preventDefault();
    this.translateService.use(lang);
  }
}
