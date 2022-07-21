import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartPageComponent } from './page/shopping-cart-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ShoppingCartPageComponent],
  imports: [CommonModule, ShoppingCartRoutingModule, SharedModule],
})
export class ShoppingCartModule {}
