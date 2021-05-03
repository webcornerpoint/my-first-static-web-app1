import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} updated from repositroy</div>`,
})
export class AppComponent {
  value = 'World';
}
