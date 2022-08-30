import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListsRoutingModule } from './order-lists-routing.module';
import { SelectColorModule } from '@shared/components/select-color/select-color.module';

import { SelectClothingTypeModule } from '@shared/components/select-clothing-type/select-clothing-type.module';
import { SelectAnimeModule } from '@shared/components/select-anime/select-anime.module';

import { SelectOrderStatusComponent } from './components/select-order-status/select-order-status.component';
import { SelectOrderDateComponent } from './components/select-order-date/select-order-date.component';
import { TagModule } from '@shared/components/tag/tag.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectSizeModule } from '@shared/components/select-size/select-size.module';
import { BackMenuModule } from '@pages/store-management/components/back-menu/back-menu.module';
import { OrderCardModule } from '../../components/order-card/order-card.module';
import { OrderListsPageComponent } from './page/order-lists-page.component';

@NgModule({
  declarations: [
    OrderListsPageComponent,
    SelectOrderStatusComponent,
    SelectOrderDateComponent,
  ],
  imports: [
    CommonModule,
    OrderListsRoutingModule,
    SelectColorModule,
    SelectClothingTypeModule,
    SelectAnimeModule,
    TagModule,
    ReactiveFormsModule,
    SelectSizeModule,
    BackMenuModule,
    OrderCardModule,
  ],
})
export class OrderListsModule {}
