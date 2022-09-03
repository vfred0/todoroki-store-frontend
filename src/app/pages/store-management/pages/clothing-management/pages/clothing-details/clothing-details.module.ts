import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingDetailsPageComponent } from './page/clothing-details-page.component';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { SelectColorModule } from '@shared/components/select-color/select-color.module';
import { SelectModule } from '@shared/components/select/select.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClothingDetailsRoutingModule } from './clothing-details-routing.module';
import { SelectAnimeModule } from '@shared/components/select-anime/select-anime.module';
import { SelectSizeModule } from '@shared/components/select-size/select-size.module';

import { SelectClothingTypeModule } from '@shared/components/select-clothing-type/select-clothing-type.module';
import { BackMenuModule } from '@pages/store-management/components/back-menu/back-menu.module';

@NgModule({
  declarations: [ClothingDetailsPageComponent],
  imports: [
    CommonModule,
    ClothingDetailsRoutingModule,
    ProductCardModule,
    AngularSvgIconModule.forRoot(),
    SelectColorModule,
    SelectAnimeModule,
    SelectSizeModule,
    SelectClothingTypeModule,
    ReactiveFormsModule,
    BackMenuModule,
  ],
})
export class ClothingDetailsModule {}
