import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './categories-routing.module';

import { SelectComponent } from './components/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesPageComponent } from './page/categories-page.component';
import { SelectColorModule } from '@shared/components/select-color/select-color.module';
import { SelectSizeModule } from '@shared/components/select-size/select-size.module';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';

@NgModule({
  declarations: [CategoriesPageComponent, SelectComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    SelectColorModule,
    SelectSizeModule,
    ProductCardModule,
  ],
})
export class CategoriesModule {}
