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
  @Input() color: Color;
  @Input() styles: string;
  @Input() isSelected: boolean;
  @Output() selectionOfColor: EventEmitter<Color> = new EventEmitter();
  @ViewChild('elementColor') elementColor: ElementRef = new ElementRef('');

  constructor(private renderer2: Renderer2) {
    this.color = {
      typeColor: TypeColor.White,
      pathIcon: 'assets/icons/check.svg',
      isSelected: false,
    };
    this.isSelected = false;
    this.styles = '';
  }

  ngAfterViewInit(): void {
    this.renderer2.listen(
      this.elementColor.nativeElement,
      'click',
      (event: any) => {
        event.preventDefault();
        this.selectionOfColor.emit(this.color);
      }
    );
  }
}
