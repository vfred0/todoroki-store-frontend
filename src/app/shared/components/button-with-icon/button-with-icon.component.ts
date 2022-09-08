import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html'
})
export class ButtonWithIconComponent {
  @Input() styles: string = 'c-button--default';
  @Input() icon: string = 'user.svg';
  @Input() description: string = 'Ver productos';
}
