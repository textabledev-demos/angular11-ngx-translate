import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
})
export class OneComponent {
  world = 'World!';

  items = [0, 1, 2, 3, 4, 5, 6, 10, 100, 1000, 1.5, 10.5];

  constructor(private translateService: TranslateService) {
    this.translateService.get('hello', { value: 'world' }).subscribe(console.log);
    this.translateService.get('hello', { wrong: 'world' }).subscribe(console.log);
  }
}
