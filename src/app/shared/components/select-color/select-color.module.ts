import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectColorComponent } from './select-color.component';
import { TagModule } from '../tag/tag.module';
import { ColorModule } from '../color/color.module';

@NgModule({
  declarations: [SelectColorComponent],
  imports: [CommonModule, TagModule, ColorModule],
  exports: [SelectColorComponent],
})
export class SelectColorModule {}
