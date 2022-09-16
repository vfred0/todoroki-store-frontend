import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailsRoutingModule } from './order-details-routing.module';

import { OrderDetailsPageComponent } from './page/order-details-page.component';
import { ProductOrderedComponent } from './components/product-ordered/product-ordered.component';
import { ColorModule } from '@shared/components/color/color.module';
import { TagModule } from '@shared/components/tag/tag.module';
import { SelectPaymentTypeComponent } from './components/select-payment-type/select-payment-type.component';
import { SelectOrderStatusComponent } from './components/select-order-status/select-order-status.component';
import { SelectOrderDatesComponent } from './components/select-order-dates/select-order-dates.component';
import { SelectModule } from '@shared/components/select/select.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BackMenuModule } from '@pages/store-management/components/back-menu/back-menu.module';
<<<<<<< HEAD
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonWithIconComponent } from '@shared/components/button-with-icon/button-with-icon.component';
import { ButtonWithIconModule } from '@shared/components/button-with-icon/button-with-icon.module';
=======
>>>>>>> develop
import { EarningSummaryModule } from '../../components/earning-summary/earning-summary.module';

@NgModule({
  declarations: [
    OrderDetailsPageComponent,
    ProductOrderedComponent,
    SelectPaymentTypeComponent,
    SelectOrderStatusComponent,
    SelectOrderDatesComponent,
  ],
  imports: [
    CommonModule,
    OrderDetailsRoutingModule,
    ColorModule,
    TagModule,
    SelectModule,
    ReactiveFormsModule,
    BackMenuModule,
    EarningSummaryModule,
<<<<<<< HEAD
    ButtonWithIconModule,
    AngularSvgIconModule.forRoot(),
=======
>>>>>>> develop
  ],
})
export class OrderDetailsModule {}
