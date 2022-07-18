import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryPageComponent } from './page/category-page/category-page.component';

import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [CategoryPageComponent],
  imports: [CommonModule, CategoryRoutingModule, SwiperModule, SharedModule],
})
export class CategoryModule {}
