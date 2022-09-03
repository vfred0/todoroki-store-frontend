import { Injectable } from '@angular/core';
import { ProductItemCart } from '@core/utils/ProductItemCart';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private productItemsCart = new BehaviorSubject<ProductItemCart[]>([]);
  productItemsCart$ = this.productItemsCart.asObservable();
  productItemsCount$: Observable<number> = this.productItemsCart$.pipe(
    map(items => items.reduce((acc, item) => acc + item.quantity, 0))
  );

  total$: Observable<number> = this.productItemsCart$.pipe(
    map(items =>
      items.reduce((acc, item) => (acc += item.quantity * item.price), 0)
    )
  );
  constructor() {
    const items = localStorage.getItem('cart');
    if (items) {
      this.productItemsCart.next(JSON.parse(items));
    }
  }

  updateProductItemCart(productItemCart: ProductItemCart) {
    this.productItemsCart.next(
      this.productItemsCart.value.map(item =>
        item.id === productItemCart.id ? productItemCart : item
      )
    );
    this.updateLocalStorage();
  }
  existsProductsInCart(): boolean {
    return this.productItemsCart.value.length > 0;
  }

  addItem(item: ProductItemCart): void {
    const itemExists = this.productItemsCart.value.find(
      itemCart => itemCart.id === item.id
    );
    if (itemExists) {
      this.updateProductItemCart({
        ...itemExists,
        quantity: itemExists.quantity + 1,
      });
    } else {
      this.productItemsCart.next([...this.productItemsCart.value, item]);
    }
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.productItemsCart.value));
  }

  deleteItem(itemToDelete: ProductItemCart): void {
    this.productItemsCart.next(
      this.productItemsCart.value.filter(item => item !== itemToDelete)
    );
    this.updateLocalStorage();
  }
}
