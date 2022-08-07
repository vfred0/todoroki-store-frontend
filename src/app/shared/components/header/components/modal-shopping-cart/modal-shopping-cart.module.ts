import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalShoppingCartComponent } from './modal-shopping-cart.component';
import { ShoppingCartItemModule } from '@shared/components/shopping-cart-item/shopping-cart-item.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from '@shared/components/button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ModalShoppingCartComponent],
  imports: [
    CommonModule,
    ShoppingCartItemModule,
    ButtonModule,
    HttpClientModule,
    RouterModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [ModalShoppingCartComponent],
})
export class ModalShoppingCartModule {}
