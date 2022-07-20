import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TagColor } from '@core/utils/TagColor';

import { TypeColor } from '@core/utils/TypeColor';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
})
export class SelectColorComponent implements AfterContentInit {
  @Input() typeColors: Array<TypeColor>;
  @Output() colorSelected = new EventEmitter<TypeColor>();
  tagColors: TagColor[];
  constructor() {
    this.typeColors = [];
    this.tagColors = [];
  }
  ngAfterContentInit(): void {
    this.tagColors = Object.values(TypeColor).map(
      (typeColor: TypeColor, index: number) => {
        let isSelected: boolean = true;
        if (index > 0) {
          isSelected = false;
        }
        return {
          typeColor,
          isSelected,
          pathIcon: 'assets/icons/check.svg',
        };
      }
    );
    this.colorSelected.emit(
      this.tagColors.filter((color: TagColor) => color.isSelected)[0].typeColor
    );
  }

  addEventClick() {
    return this.tagColors.length > 1;
  }

  selectionOfColor(tagColor: TagColor) {
    this.tagColors = this.tagColors.map((item: TagColor) => {
      if (!Object.is(tagColor, item)) {
        item = { ...item, isSelected: false };
      } else {
        item = { ...item, isSelected: true };
      }
      return item;
    });
    this.colorSelected.emit(tagColor.typeColor);
  }

  // private getColor(): TagColor {
  //   return this.tagColors.filter((color: TagColor) => color.isSelected)[0];
  // }
}
