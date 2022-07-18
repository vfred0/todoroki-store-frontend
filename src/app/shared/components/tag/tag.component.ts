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
import { Tag } from '@core/utils/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent implements AfterViewInit {
  @Output() selectionOfTag: EventEmitter<Tag>;
  @Input() selectable: boolean;
  @Input() tag: Tag;
  @Input() styles: string;
  @Input() isSelected: boolean;

  @ViewChild('elementTag') elementTag: ElementRef;
  constructor(private renderer2: Renderer2) {
    this.isSelected = false;
    this.tag = {} as Tag;
    this.selectable = false;
    this.selectionOfTag = new EventEmitter<Tag>();
    this.elementTag = new ElementRef('');
    this.styles = '';
  }

  ngAfterViewInit(): void {
    if (this.selectable) {
      this.renderer2.listen(
        this.elementTag.nativeElement,
        'click',
        (event: any) => {
          event.preventDefault();
          this.selectionOfTag.emit(this.tag);
        }
      );
    }
  }
}
