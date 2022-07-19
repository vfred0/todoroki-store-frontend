import { Component, OnInit } from '@angular/core';
import { Color, TypeColor } from '@core/utils/Color';
import { Size } from '@core/utils/Size';
import { Tag } from '@core/utils/Tag';
import { TagSize } from '@core/utils/TagSize';

@Component({
  selector: 'app-category-page',
  templateUrl: './categories-page.component.html',
})
export class CategoriesPageComponent {
  tagSizes: Array<TagSize>;

  colors: Color[] = [
    {
      typeColor: TypeColor.Black,
      isSelected: false,
      pathIcon: 'assets/icons/check.svg',
    },
    {
      typeColor: TypeColor.White,
      isSelected: false,
      pathIcon: 'assets/icons/check.svg',
    },
  ];
  constructor() {
    this.tagSizes = [];
    Object.values(Size).forEach((size: string) => {
      this.tagSizes.push({
        description: size,
        isSelected: false,
        pathIcon: 'assets/icons/size.svg',
      });
    });
  }
  selectionOfTag(tag: Tag) {
    this.tagSizes = this.tagSizes.map((tagSize: TagSize) => {
      if (!Object.is(tagSize, tag)) {
        tagSize = { ...tagSize, isSelected: false };
      } else {
        tagSize = { ...tagSize, isSelected: true };
      }
      return tagSize;
    });
  }

  selectionOfColor(color: Color) {
    this.colors = this.colors.map((item: Color) => {
      if (!Object.is(color, item)) {
        item = { ...item, isSelected: false };
      } else {
        item = { ...item, isSelected: true };
      }
      return item;
    });
  }
}
