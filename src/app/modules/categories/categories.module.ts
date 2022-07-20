import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './categories-routing.module';

import { SelectComponent } from './components/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { CategoriesPageComponent } from './page/categories-page.component';

@NgModule({
  declarations: [CategoriesPageComponent, SelectComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CategoriesModule {}
