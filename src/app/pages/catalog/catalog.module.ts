import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectColorModule } from '@shared/components/select-color/select-color.module';
import { SelectSizeModule } from '@shared/components/select-size/select-size.module';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';
import { HeaderModule } from '@shared/components/header/header.module';
import { CatalogPageComponent } from './page/catalog-page.component';
import { SelectModule } from '@shared/components/select/select.module';

@NgModule({
  declarations: [CatalogPageComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ReactiveFormsModule,
    SelectColorModule,
    SelectSizeModule,
    ProductCardModule,
    HeaderModule,
    SelectModule,
  ],
})
export class CatalogModule {}
