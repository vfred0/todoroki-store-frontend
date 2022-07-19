import { Component } from '@angular/core';
import { TypeButton } from '@core/utils/TypeButton';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  activeModal: string = '';
  // typeButton: TypeButton = TypeButton.Default;

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
