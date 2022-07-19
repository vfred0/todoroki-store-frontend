import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Color, TypeColor } from '@core/utils/Color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
})
export class ColorComponent {
  @Input() color: Color;
  @Input() styles: string;
  @Input() isSelected: boolean;
  @Output() selectionOfColor: EventEmitter<Color> = new EventEmitter();
  @ViewChild('elementColor') elementColor: ElementRef = new ElementRef('');

  constructor() {
    this.color = {
      typeColor: TypeColor.White,
      pathIcon: 'assets/icons/check.svg',
      isSelected: false,
    };
    this.isSelected = false;
    this.styles = '';
  }

  onClick(): void {
    this.selectionOfColor.emit(this.color);
  }
}
