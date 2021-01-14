import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
})
export class OneComponent {
  world = 'World!';

  constructor(private translateService: TranslateService) {
    this.translateService.get('hello', { value: 'world' }).subscribe(console.log);
    this.translateService.get('hello', { wrong: 'world' }).subscribe(console.log);
  }
}
