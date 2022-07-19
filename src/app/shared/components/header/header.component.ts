import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  activeModal: string = '';

  constructor() {}

  onToggle(event: any): void {
    event.preventDefault();
    if (this.activeModal === 'is-active') {
      this.activeModal = '';
    } else {
      this.activeModal = 'is-active';
    }
  }
}
