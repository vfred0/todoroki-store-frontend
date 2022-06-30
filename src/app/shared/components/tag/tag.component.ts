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
import { Tag, TypeTag } from '@core/utils/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent implements AfterViewInit {
  @Input() tag: Tag = {
    typeTag: TypeTag.Likes,
    description: '150',
    pathIcon: 'assets/icons/heart.svg',
    isClickable: true,
  };
  @ViewChild('etag') _elementTag: ElementRef = new ElementRef('');
  _selected: string = '';

  @Output() selected: EventEmitter<boolean> = new EventEmitter();

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.tag.isClickable) {
      this.renderer2.listen(
        this._elementTag.nativeElement,
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
