import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSizeComponent } from './select-size.component';
import { TagModule } from '../tag/tag.module';

@NgModule({
  declarations: [SelectSizeComponent],
  imports: [CommonModule, TagModule],
  exports: [SelectSizeComponent],
})
export class SelectSizeModule {}
