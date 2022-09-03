import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothingListRoutingModule } from './clothing-list-routing.module';

import { SelectAnimeModule } from '@shared/components/select-anime/select-anime.module';
import { SelectClothingTypeModule } from '@shared/components/select-clothing-type/select-clothing-type.module';
import { SelectColorModule } from '@shared/components/select-color/select-color.module';
import { BackMenuModule } from '@pages/store-management/components/back-menu/back-menu.module';
import { ClothingListPageComponent } from './page/clothing-list-page.component';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';

@NgModule({
  declarations: [ClothingListPageComponent],
  imports: [
    CommonModule,
    ClothingListRoutingModule,
    SelectAnimeModule,
    SelectClothingTypeModule,
    SelectColorModule,
    BackMenuModule,
    ProductCardModule,
  ],
})
export class ClothingListModule {}
