import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersManagementRoutingModule } from './orders-management-routing.module';
import { OrdersManagementComponent } from './pages/orders-management.component';

import { BackMenuModule } from '@pages/store-management/components/back-menu/back-menu.module';
import { CardManagementModule } from '@pages/store-management/components/card-management/card-management.module';
import { EarningSummaryComponent } from './components/earning-summary/earning-summary.component';
import { TagModule } from '@shared/components/tag/tag.module';
import { ColorModule } from '@shared/components/color/color.module';
import { EarningSummaryModule } from './components/earning-summary/earning-summary.module';

@NgModule({
  declarations: [OrdersManagementComponent],
  imports: [
    CommonModule,
    OrdersManagementRoutingModule,
    BackMenuModule,
    CardManagementModule,
    TagModule,
    EarningSummaryModule,
    ColorModule,
  ],
})
export class OrdersManagementModule {}
