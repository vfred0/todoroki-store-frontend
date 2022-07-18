import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './product-routing.module';

import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '@shared/shared.module';
import { ProductPageComponent } from './page/product-page/product-page.component';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [CommonModule, CategoryRoutingModule, SwiperModule, SharedModule],
})
export class ProductModule {}
