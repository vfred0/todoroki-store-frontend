import { Component } from '@angular/core';
import { ProductItemCart } from '@core/utils/ProductItemCart';
import { Size } from '@core/utils/Size';
<<<<<<< HEAD:src/app/shared/components/header/components/modal-shopping-cart/modal-shopping-cart.component.ts
import { TypeColor } from '@core/utils/TypeColor';
import { ModalComponent } from '../modal/modal.component';
=======
import { Color } from '@core/utils/Color';
>>>>>>> main:src/app/shared/components/modal-shopping-cart/modal-shopping-cart.component.ts

@Component({
  selector: 'app-modal-shopping-cart',
  templateUrl: './modal-shopping-cart.component.html',
})
export class ModalShoppingCartComponent extends ModalComponent {
  productItemsCarts: ProductItemCart[];
  constructor() {
    super();
    this.productItemsCarts = [];
    this.productItemsCarts = [
      {
        id: 1,
        description: 'Product 1',
        price: 11.99,
        size: Size.S,
        color: Color.White,
        quantity: 1,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 2,
        description: 'Product 2',
        price: 12.99,
        size: Size.S,
        color: Color.White,
        quantity: 1,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 3,
        description: 'Product 2',
        price: 12.99,
        size: Size.S,
        color: Color.White,
        quantity: 1,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 3,
        description: 'Product 2',
        price: 12.99,
        size: Size.S,
        color: TypeColor.White,
        quantity: 1,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 3,
        description: 'Product 2',
        price: 12.99,
        size: Size.S,
        color: TypeColor.White,
        quantity: 1,
        image: 'https://picsum.photos/200/300',
      },
    ];
  }

  removeProductItemCart(productItemCart: ProductItemCart) {
    this.productItemsCarts = this.productItemsCarts.filter(
      (item: ProductItemCart) => !Object.is(item, productItemCart)
    );
  }

  getTotalPriceForProducts() {
    return this.productItemsCarts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
  contactForWhatsapp() {
    console.log('DEBUG', this.productItemsCarts);
    window.open(
      'https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20produtos%20no%20site%20do%20restaurante%20'
    );
  }

  existsProductsInCart(): boolean {
    return this.productItemsCarts.length > 0;
  }

  override onToggle(): void {
    super.onToggle();
    console.log('DEBUG', 'onToggle', this.productItemsCarts);
  }
}
