import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListsRoutingModule } from './order-lists-routing.module';
import { SelectColorModule } from '@shared/components/select-color/select-color.module';

import { OrderListsComponent } from './order-lists.component';

import { SelectClothingTypeModule } from '@shared/components/select-clothing-type/select-clothing-type.module';
import { SelectAnimeModule } from '@shared/components/select-anime/select-anime.module';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { SelectOrderStatusComponent } from './components/select-order-status/select-order-status.component';
import { SelectOrderDateComponent } from './components/select-order-date/select-order-date.component';
import { TagModule } from '@shared/components/tag/tag.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectSizeModule } from '@shared/components/select-size/select-size.module';

@NgModule({
  declarations: [
    OrderListsComponent,
    OrderCardComponent,
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
  ],
})
export class OrderListsModule {}
