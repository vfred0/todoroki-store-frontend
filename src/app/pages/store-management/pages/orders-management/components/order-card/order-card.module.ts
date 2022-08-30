import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectColorModule } from '@shared/components/select-color/select-color.module';
import { SelectSizeModule } from '@shared/components/select-size/select-size.module';
import { TagModule } from '@shared/components/tag/tag.module';
import { OrderCardComponent } from './order-card.component';

@NgModule({
  declarations: [OrderCardComponent],
  imports: [CommonModule, TagModule, SelectColorModule, SelectSizeModule],
  exports: [OrderCardComponent],
})
export class OrderCardModule {}
