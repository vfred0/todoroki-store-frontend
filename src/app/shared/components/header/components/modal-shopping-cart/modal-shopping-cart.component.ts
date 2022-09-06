import { Component, OnDestroy } from '@angular/core';
import { Order } from '@core/models/Order';
import { ProductItemCart } from '@core/utils/ProductItemCart';
import { ProductOrder } from '@core/utils/ProductOrder';
import { OrderService } from '@shared/services/order.service';
import { ShoppingCartService } from '@shared/services/shopping-cart.service';
import { Subscription, tap } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-shopping-cart',
  templateUrl: './modal-shopping-cart.component.html',
})
export class ModalShoppingCartComponent
  extends ModalComponent
  implements OnDestroy
{
  cartItems$ = this.shoppingcartService.productItemsCart$;
  total$ = this.shoppingcartService.total$;
  itemsCount$ = this.shoppingcartService.productItemsCount$;
  private subscription: Subscription;

  constructor(
    private orderService: OrderService,
    private shoppingcartService: ShoppingCartService
  ) {
    super();
    this.subscription = new Subscription();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeProductItemCart(productItemCart: ProductItemCart) {
    this.shoppingcartService.deleteItem(productItemCart);
  }

  contactForWhatsapp() {
    let productOrders: ProductOrder[] = [];
    let order: Order = {} as Order;
    this.subscription.add(
      this.cartItems$.subscribe(items => {
        items.forEach(item => {
          productOrders.push({
            productId: item.id,
            color: item.color,
            size: item.size,
            price: item.price,
            quantity: item.quantity,
          });
        });
      })
    );

    this.subscription.add(
      this.total$.subscribe(total => (order.price = total))
    );

    this.subscription.add(
      this.itemsCount$.subscribe(count => (order.quantity = count))
    );

    order.productOrders = productOrders;
    console.log(order);

    this.orderService.save(order).subscribe((orderNumber: number) => {
      let message: string = `Hola, mi número de orden es ${orderNumber}`;
      window.open(
        `https://api.whatsapp.com/send?phone=593939076291&text=${message}`
      );
    });
  }

  existsProductsInCart(): boolean {
    return this.shoppingcartService.existsProductsInCart();
  }

  override onToggle(): void {
    super.onToggle();
  }
}
