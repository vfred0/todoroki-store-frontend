import { Component, Input } from '@angular/core';
import { TypeButton } from '@core/models/TypeButton';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() typeButton: TypeButton | undefined;
}
