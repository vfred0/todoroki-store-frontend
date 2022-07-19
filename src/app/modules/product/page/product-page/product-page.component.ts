import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Color, TypeColor } from '@core/utils/Color';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Tag } from '@core/utils/Tag';
import { Size } from '@core/utils/Size';
import { TagSize } from '@core/utils/TagSize';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductPageComponent {
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

  likes: Tag;

  constructor() {
    this.tagSizes = [];
    Object.values(Size).forEach((size: string) => {
      this.tagSizes.push({
        description: size,
        isSelected: false,
        pathIcon: 'assets/icons/size.svg',
      });
    });
    this.likes = {
      description: '150',
      pathIcon: 'assets/icons/heart.svg',
    };
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
    console.log(this.colors);
  }
}
