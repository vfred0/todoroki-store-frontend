import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreManagementRoutingModule } from './store-management-routing.module';
import { StoreManagementComponent } from './pages/store-management.component';
import { CardManagementModule } from '@pages/store-management/components/card-management/card-management.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalActionsForUserComponent } from './components/modal-actions-for-user/modal-actions-for-user.component';
import { ButtonWithIconModule } from '@shared/components/button-with-icon/button-with-icon.module';

@NgModule({
  declarations: [StoreManagementComponent, ModalActionsForUserComponent],
  imports: [
    CommonModule,
    StoreManagementRoutingModule,
    CardManagementModule,
    AngularSvgIconModule.forRoot(),
    ButtonWithIconModule,
  ],
})
export class StoreManagementModule {}
