import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItemCart } from '@core/utils/ProductItemCart';
import { Tag } from '@core/utils/Tag';
import { TagColor } from '@core/utils/TagColor';
import { ShoppingCartService } from '@shared/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() productItemCart: ProductItemCart;
  @Output() removeProductItemCart: EventEmitter<ProductItemCart>;

  tagSize: Tag;
  tagPrice: Tag;
  tagColor: TagColor;
  constructor(private shoppingCartService: ShoppingCartService) {
    this.removeProductItemCart = new EventEmitter<ProductItemCart>();
    this.tagSize = {} as Tag;
    this.tagColor = {} as TagColor;
    this.tagPrice = {} as Tag;
    this.productItemCart = {} as ProductItemCart;
  }
  ngOnInit(): void {
    this.tagColor = {
      typeColor: this.productItemCart.color,
      isSelected: true,
    };

    this.tagSize = {
      description: this.productItemCart.size,
      pathIcon: '/assets/icons/size.svg',
    };

    this.tagPrice = {
      description: this.productItemCart.price.toString(),
      pathIcon: '/assets/icons/price.svg',
    };
  }
  onRemoveProduct() {
    this.removeProductItemCart.emit(this.productItemCart);
  }

  setProductCartQuantity(quantity: number) {
    this.productItemCart.quantity = quantity;
    this.shoppingCartService.updateProductItemCart(this.productItemCart);
  }
}
