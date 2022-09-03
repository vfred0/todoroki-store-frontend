import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothingManagenentRoutingModule } from './clothing-managenent-routing.module';
import { ClothingManagementPageComponent } from './pages/clothing-management-page.component';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';
import { CardManagementModule } from '@pages/store-management/components/card-management/card-management.module';
import { BackMenuModule } from '@pages/store-management/components/back-menu/back-menu.module';
import { TagModule } from '@shared/components/tag/tag.module';
import { ColorModule } from '@shared/components/color/color.module';

@NgModule({
  declarations: [ClothingManagementPageComponent],
  imports: [
    CommonModule,
    ClothingManagenentRoutingModule,
    ProductCardModule,
    CardManagementModule,
    BackMenuModule,
    TagModule,
    ColorModule,
  ],
})
export class ClothingManagenentModule {}
