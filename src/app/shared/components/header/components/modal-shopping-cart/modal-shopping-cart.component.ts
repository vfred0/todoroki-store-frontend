import { Component } from '@angular/core';
import { ProductItemCart } from '@core/utils/ProductItemCart';
import { ShoppingCartService } from '@shared/services/shopping-cart.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-shopping-cart',
  templateUrl: './modal-shopping-cart.component.html',
})
export class ModalShoppingCartComponent extends ModalComponent {
  cartItems$ = this.shoppingcartService.productItemsCart$;
  total$ = this.shoppingcartService.total$;
  itemsCount$ = this.shoppingcartService.productItemsCount$;
  constructor(private shoppingcartService: ShoppingCartService) {
    super();
  }

  removeProductItemCart(productItemCart: ProductItemCart) {
    this.shoppingcartService.deleteItem(productItemCart);
  }

  contactForWhatsapp() {
    console.log('DEBUG ==>', this.cartItems$);
    // window.open(
    //   'https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20produtos%20no%20site%20do%20restaurante%20'
    // );
  }

  existsProductsInCart(): boolean {
    return this.shoppingcartService.existsProductsInCart();
  }

  override onToggle(): void {
    super.onToggle();
  }
}
