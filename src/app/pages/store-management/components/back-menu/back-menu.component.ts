import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-menu',
  templateUrl: './back-menu.component.html',
})
export class BackMenuComponent {
  @Input() description: string;
  constructor() {
    this.description = '';
  }
}
