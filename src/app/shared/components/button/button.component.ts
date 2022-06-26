import { Component, Input } from '@angular/core';
import { TypeButton } from '@core/models/TypeButton';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() typeButton: TypeButton | undefined;
  @Input() description: string = 'Ver productos';

  isDefault(): boolean {
    return this.typeButton == TypeButton.Default;
  }
}
