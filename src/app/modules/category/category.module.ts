import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryPageComponent } from './page/category-page/category-page.component';

@NgModule({
  declarations: [CategoryPageComponent],
  imports: [CommonModule, CategoryRoutingModule],
})
export class CategoryModule {}
