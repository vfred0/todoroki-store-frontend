import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingDetailsPageComponent } from './page/clothing-details-page.component';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';
import { ModalProductManagementComponent } from './components/modal-product-management/modal-product-management.component';

@NgModule({
  declarations: [ClothingDetailsPageComponent, ModalProductManagementComponent],
  imports: [CommonModule, ProductCardModule],
})
export class ClothingDetailsPageModule {}
