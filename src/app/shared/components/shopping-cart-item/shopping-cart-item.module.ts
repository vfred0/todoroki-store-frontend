import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartItemComponent } from './shopping-cart-item.component';
import { TagModule } from '../tag/tag.module';
import { QuantityModule } from '../quantity/quantity.module';
import { ColorModule } from '../color/color.module';

@NgModule({
  declarations: [ShoppingCartItemComponent],
  imports: [CommonModule, TagModule, QuantityModule, ColorModule],
  exports: [ShoppingCartItemComponent],
})
export class ShoppingCartItemModule {}
