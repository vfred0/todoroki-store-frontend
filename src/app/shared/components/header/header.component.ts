import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isActiveModalMenu: boolean = false;
  isActiveModalShoppingCart: boolean = false;

  onToggleMenu(): void {
    // event.preventDefault();
    this.isActiveModalMenu = !this.isActiveModalMenu;
  }

  onToggleShoppingCart(): void {
    // event.preventDefault();
    this.isActiveModalShoppingCart = !this.isActiveModalShoppingCart;
  }
}
