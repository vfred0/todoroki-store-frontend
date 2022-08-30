import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSearchRoutingModule } from './order-search-routing.module';
import { OrderSearchPageComponent } from './page/order-search-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackMenuModule } from '@pages/store-management/components/back-menu/back-menu.module';
import { OrderCardModule } from '../../components/order-card/order-card.module';

@NgModule({
  declarations: [OrderSearchPageComponent],
  imports: [
    CommonModule,
    OrderSearchRoutingModule,
    ReactiveFormsModule,
    BackMenuModule,
    OrderCardModule,
  ],
})
export class OrderSearchModule {}
