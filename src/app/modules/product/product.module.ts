import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './product-routing.module';

import { SwiperModule } from 'swiper/angular';

import { ProductPageComponent } from './page/product-page.component';
import { ButtonModule } from '@shared/components/button/button.module';
import { SelectColorComponent } from '@shared/components/select-color/select-color.component';
import { SelectColorModule } from '@shared/components/select-color/select-color.module';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';
import { QuantityModule } from '@shared/components/quantity/quantity.module';
import { SelectSizeModule } from '@shared/components/select-size/select-size.module';
import { TagModule } from '@shared/components/tag/tag.module';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SwiperModule,
    ButtonModule,
    SelectColorModule,
    SelectSizeModule,
    ProductCardModule,
    QuantityModule,
    TagModule,
    ProductCardModule,
  ],
})
export class ProductModule {}
