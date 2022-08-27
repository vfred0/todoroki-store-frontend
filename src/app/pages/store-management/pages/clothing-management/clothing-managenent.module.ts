import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothingManagenentRoutingModule } from './clothing-managenent-routing.module';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ClothingManagementPageComponent } from './page/clothing-management-page.component';
import { SelectModule } from '@shared/components/select/select.module';
import { SelectColorModule } from '@shared/components/select-color/select-color.module';
import { SelectSizeModule } from '@shared/components/select-size/select-size.module';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';
import { ModalProductManagementComponent } from './components/modal-product-management/modal-product-management.component';

@NgModule({
  declarations: [
    ClothingManagementPageComponent,
    ModalProductManagementComponent,
  ],
  imports: [
    CommonModule,
    ClothingManagenentRoutingModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
    SelectModule,
    SelectColorModule,
    SelectSizeModule,
    ProductCardModule,
  ],
})
export class ClothingManagenentModule {}
