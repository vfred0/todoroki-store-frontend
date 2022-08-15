import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartPageComponent } from './page/shopping-cart-page.component';
import { ButtonModule } from '@shared/components/button/button.module';
import { ShoppingCartItemModule } from '@shared/components/shopping-cart-item/shopping-cart-item.module';

@NgModule({
  declarations: [ShoppingCartPageComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    ButtonModule,
    ShoppingCartItemModule,
  ],
})
export class ShoppingCartModule {}
