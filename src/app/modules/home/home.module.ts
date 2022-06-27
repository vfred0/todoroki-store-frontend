import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './page/home-page.component';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './components/slider/slider.component';
import { MostWantedContentComponent } from './components/most-wanted-content/most-wanted-content.component';
import { SharedModule } from '@shared/shared.module';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
    MostWantedContentComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SwiperModule, SharedModule],
})
export class HomeModule {}
