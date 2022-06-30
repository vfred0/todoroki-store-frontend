import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Color, TypeColor } from '@core/utils/Color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
})
export class ColorComponent implements AfterViewInit {
  @Input() color: Color = {
    typeColor: TypeColor.White,
    pathIcon: 'assets/icons/check.svg',
    isClickable: true,
  };
  @ViewChild('eColor') _elementColor: ElementRef = new ElementRef('');
  _selected: string = '';

  @Output() selected: EventEmitter<boolean> = new EventEmitter();

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.color.isClickable) {
      this.renderer2.listen(
        this._elementColor.nativeElement,
        'click',
        (event: any) => {
          event.preventDefault();
          if (this._selected === 'has-selected') {
            this._selected = '';
          } else {
            this._selected = 'has-selected';
            this.selected.emit(true);
          }
        }
      );
    }
  }
}
