import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html'
})
export class InputWithIconComponent{
  @Input() styles: string = '';
  @Input() icon: string = 'picture.svg';
  @Input() placeholder: string = 'Esto es un placeholder';
  @Input() type: string = 'text';
  @Input() formControlName: string = '';
}
