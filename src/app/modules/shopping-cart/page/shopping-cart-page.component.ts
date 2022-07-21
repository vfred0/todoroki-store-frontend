import { Component, OnInit } from '@angular/core';
import { ProductItemCart } from '@core/utils/ProductItemCart';
import { Size } from '@core/utils/Size';
import { TypeColor } from '@core/utils/TypeColor';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
})
export class ShoppingCartPageComponent implements OnInit {
  productItemsCarts: ProductItemCart[];

  constructor() {
    this.productItemsCarts = Array<ProductItemCart>();
  }

  ngOnInit(): void {
    this.productItemsCarts = [
      {
        id: 1,
        description: 'Product 1',
        price: 11.99,
        size: Size.S,
        color: TypeColor.White,
        quantity: 1,
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 2,
        description: 'Product 2',
        price: 12,
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
    return this.productItemsCarts.reduce((acc, item) => acc + item.price, 0);
  }

  contactForWhatsapp() {
    console.log('DEBUG', this.productItemsCarts);
    window.open(
      'https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20produtos%20no%20site%20do%20restaurante%20'
    );
  }
}
