import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-menu',
  templateUrl: './back-menu.component.html',
})
export class BackMenuComponent {
  @Input() description: string;
  // @Input() redirectTo: string;

  constructor(private location: Location) {
    this.description = '';
    // this.redirectTo = '';
  }

  onBack() {
    this.location.back();
  }
}
