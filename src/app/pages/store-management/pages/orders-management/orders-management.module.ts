import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersManagementRoutingModule } from './orders-management-routing.module';
import { OrdersManagementComponent } from './pages/orders-management.component';

import { BackMenuModule } from '@pages/store-management/components/back-menu/back-menu.module';
import { CardManagementModule } from '@pages/store-management/components/card-management/card-management.module';
import { EarningSummaryComponent } from './components/earning-summary/earning-summary.component';
import { TagModule } from '@shared/components/tag/tag.module';
import { ColorModule } from '@shared/components/color/color.module';
import { OrderCardComponent } from './components/order-card/order-card.component';

@NgModule({
  declarations: [OrdersManagementComponent, EarningSummaryComponent],
  imports: [
    CommonModule,
    OrdersManagementRoutingModule,
    BackMenuModule,
    CardManagementModule,
    TagModule,
    ColorModule,
  ],
})
export class OrdersManagementModule {}
