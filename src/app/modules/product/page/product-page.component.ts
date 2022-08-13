import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Tag } from '@core/utils/Tag';
import { Size } from '@core/utils/Size';

import { QuantityComponent } from '@shared/components/quantity/quantity.component';
import { Color } from '@core/utils/Color';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductPageComponent {
  @ViewChild(QuantityComponent) quantity!: QuantityComponent;
  sizes: Array<Size>;
  likes: Tag;
  typeColors: Color[];

  constructor() {
    this.sizes = [...Object.values(Size)];
    this.typeColors = [...Object.values(Color)];

    this.likes = {
      description: '150',
      pathIcon: 'assets/icons/heart.svg',
    };
  }

  addToCart() {
    console.log('add to cart', this.quantity.getValue());
  }
  colorSelected(color: Color) {
    console.log('????', color);
  }

  sizeSelected(size: Size) {
    console.log('????', size);
  }
}
