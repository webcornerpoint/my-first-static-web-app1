import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} updated from repositroy and updatedd from local</div>`,
})
export class AppComponent {
  value = 'World';
}
