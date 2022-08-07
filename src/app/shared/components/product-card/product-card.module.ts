import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { TagModule } from '../tag/tag.module';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, TagModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
