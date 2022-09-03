import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '@shared/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isActiveModalMenu: boolean;
  isActiveModalShoppingCart: boolean;
  // isActiveModalSearch: boolean = false;
  itemsCount$ = this.shoppingCartService.productItemsCount$;
  constructor(private shoppingCartService: ShoppingCartService) {
    this.isActiveModalMenu = false;
    this.isActiveModalShoppingCart = false;
  }

  onToggleMenu(): void {
    this.isActiveModalMenu = !this.isActiveModalMenu;
    this.isActiveModalShoppingCart = false;
    // this.isActiveModalSearch = false;
  }

  onToggleShoppingCart(): void {
    this.isActiveModalShoppingCart = !this.isActiveModalShoppingCart;
    this.isActiveModalMenu = false;
    // this.isActiveModalSearch = false;
  }

  // onToggleSearch(): void {
  //   this.isActiveModalSearch = !this.isActiveModalSearch;
  //   this.isActiveModalMenu = false;
  //   this.isActiveModalShoppingCart = false;
  // }
}
