import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TagColor } from '@core/utils/TagColor';

import { Color } from '@core/types/Color';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
})
export class SelectColorComponent implements AfterContentInit {
  @Input() typeColors: Array<Color>;
  @Output() colorSelected = new EventEmitter<Color>();
  tagColors: TagColor[];
  @Input() isSelectable: boolean;
  @Input() selectedColors: Color[];
  constructor() {
    this.typeColors = [];
    this.tagColors = [];
    this.selectedColors = [];
    this.isSelectable = true;
  }
  ngAfterContentInit(): void {
    this.tagColors = Object.values(Color).map(
      (typeColor: Color, index: number) => {
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
    this.tagColors = this.tagColors.map((item: TagColor) => {
      if (this.selectedColors.includes(item.typeColor as Color)) {
        item.isSelected = true;
      }
      return item;
    });

    if (this.isSelectable) {
      this.colorSelected.emit(
        this.tagColors.filter((color: TagColor) => color.isSelected)[0]
          .typeColor
      );
    }
  }

  // addEventClick() {
  //   return this.tagColors.length > 1;
  // }

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

  setColorSelected(color: Color) {
    this.tagColors = this.tagColors.map((item: TagColor) => {
      if (!Object.is(color, item.typeColor)) {
        item = { ...item, isSelected: false };
      } else {
        item = { ...item, isSelected: true };
      }
      return item;
    });
  }

  // private getColor(): TagColor {
  //   return this.tagColors.filter((color: TagColor) => color.isSelected)[0];
  // }
}
