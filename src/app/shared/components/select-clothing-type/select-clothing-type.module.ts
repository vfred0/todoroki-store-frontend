import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectClothingTypeComponent } from './select-clothing-type.component';
import { SelectModule } from '../select/select.module';

@NgModule({
  declarations: [SelectClothingTypeComponent],
  imports: [CommonModule, SelectModule],
  exports: [SelectClothingTypeComponent],
})
export class SelectClothingTypeModule {}
