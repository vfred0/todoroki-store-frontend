import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersManagementRoutingModule } from './orders-management-routing.module';
import { OrdersManagementComponent } from './page/orders-management.component';

@NgModule({
  declarations: [OrdersManagementComponent],
  imports: [CommonModule, OrdersManagementRoutingModule],
})
export class OrdersManagementModule {}
