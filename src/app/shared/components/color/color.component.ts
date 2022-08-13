import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TagColor } from '@core/utils/TagColor';
import { Color } from '@core/utils/Color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
})
export class ColorComponent implements AfterViewInit, OnInit {
  @Input() tagColor: TagColor;
  @Input() styles: string;
  @Input() isSelected: boolean;
  @Input() isSelectable: boolean;
  @Input() typeColor: Color;
  @Output() selectionOfColor: EventEmitter<TagColor>;
  @ViewChild('elementColor') elementColor: ElementRef;

  constructor(private renderer2: Renderer2) {
    this.typeColor = {} as Color;

    this.tagColor = {
      typeColor: Color.Black,
      isSelected: false,
    };
    this.isSelected = false;
    this.isSelectable = true;
    this.styles = '';
    this.selectionOfColor = new EventEmitter<TagColor>();
    this.elementColor = new ElementRef('');
  }
  ngOnInit(): void {
    this.isSelected = this.tagColor.isSelected;
  }

  ngAfterViewInit(): void {
    // this.isSelected = this.tagColor.isSelected;
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
