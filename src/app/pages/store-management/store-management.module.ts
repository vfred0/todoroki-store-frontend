import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreManagementRoutingModule } from './store-management-routing.module';
import { StoreManagementComponent } from './pages/store-management.component';

@NgModule({
  declarations: [StoreManagementComponent],
  imports: [CommonModule, StoreManagementRoutingModule],
})
export class StoreManagementModule {}
