import { Component, Input, OnInit } from '@angular/core';
import { ProductOrdered } from '@core/utils/ProductOrdered';
import { Tag } from '@core/utils/Tag';
import { TagColor } from '@core/utils/TagColor';

@Component({
  selector: 'app-product-ordered',
  templateUrl: './product-ordered.component.html',
})
export class ProductOrderedComponent {
  @Input() productOrdered: ProductOrdered;
  constructor() {
    this.productOrdered = {} as ProductOrdered;
  }
  getTagColor(): TagColor {
    return {
      isSelected: true,
      typeColor: this.productOrdered.color,
    };
  }

  getTagSize(): Tag {
    return {
      description: this.productOrdered.size,
      pathIcon: '/assets/icons/size.svg',
    };
  }

  getTagQuantity(): Tag {
    return {
      description: this.productOrdered.quantity.toString(),
      pathIcon: '/assets/icons/cart.svg',
    };
  }

  getTagUnitPrice(): Tag {
    return {
      description: `${this.productOrdered.unitPrice}/u`,
      pathIcon: '/assets/icons/price.svg',
    };
  }

  getTagPrice(): Tag {
    return {
      description: this.productOrdered.totalPrice.toString(),
      pathIcon: '/assets/icons/pricev2.svg',
    };
  }
}
