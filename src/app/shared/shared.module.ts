import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

import { TagComponent } from './components/tag/tag.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { QuantityComponent } from './components/quantity/quantity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectColorComponent } from './components/select-color/select-color.component';
import { SelectSizeComponent } from './components/select-size/select-size.component';
import { ColorComponent } from './components/color/color.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { ModalShoppingCartComponent } from './components/modal-shopping-cart/modal-shopping-cart.component';
import { ModalMenuComponent } from './components/modal-menu/modal-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    ProductCardComponent,
    TagComponent,
    ColorComponent,
    QuantityComponent,
    SelectColorComponent,
    SelectSizeComponent,
    ShoppingCartItemComponent,
    ModalShoppingCartComponent,
    ModalMenuComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    ProductCardComponent,
    TagComponent,
    ColorComponent,
    QuantityComponent,
    SelectColorComponent,
    SelectSizeComponent,
    ShoppingCartItemComponent,
  ],
})
export class SharedModule {}
