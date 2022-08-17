import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';

import { SelectComponent } from './components/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CatlogPageComponent } from './page/catalog-page.component';
import { SelectColorModule } from '@shared/components/select-color/select-color.module';
import { SelectSizeModule } from '@shared/components/select-size/select-size.module';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';

@NgModule({
  declarations: [CatlogPageComponent, SelectComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ReactiveFormsModule,
    SelectColorModule,
    SelectSizeModule,
    ProductCardModule,
  ],
})
export class CatalogModule {}
