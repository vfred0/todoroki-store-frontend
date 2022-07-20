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
import { TagColor } from '@core/utils/TagColor';
import { TypeColor } from '@core/utils/TypeColor';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
})
export class ColorComponent implements AfterViewInit {
  @Input() tagColor: TagColor;
  @Input() styles: string;
  @Input() isSelected: boolean;
  @Input() isSelectable: boolean;
  @Output() selectionOfColor: EventEmitter<TagColor>;
  @ViewChild('elementColor') elementColor: ElementRef;

  constructor(private renderer2: Renderer2) {
    this.tagColor = {
      typeColor: TypeColor.Black,
      pathIcon: 'assets/icons/check.svg',
      isSelected: false,
    };
    this.isSelected = false;
    this.isSelectable = true;
    this.styles = '';
    this.selectionOfColor = new EventEmitter<TagColor>();
    this.elementColor = new ElementRef('');
  }

  ngAfterViewInit(): void {
    if (this.isSelectable && !this.isSelected) {
      this.renderer2.listen(
        this.elementColor.nativeElement,
        'click',
        (event: any) => {
          event.preventDefault();
          this.selectionOfColor.emit(this.tagColor);
        }
      );
    }
  }
}
