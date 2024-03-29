import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './page/home-page.component';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './components/slider/slider.component';
import { MostWantedContentComponent } from './components/most-wanted-content/most-wanted-content.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from '@shared/components/button/button.module';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';
import { HeaderModule } from '@shared/components/header/header.module';
import { ClothingTypeCardComponent } from './components/clothing-type-card/clothing-type-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
    MostWantedContentComponent,
    ClothingTypeCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    HttpClientModule,
    ButtonModule,
    ProductCardModule,
    AngularSvgIconModule.forRoot(),
    HeaderModule,
  ],
})
export class HomeModule {}
