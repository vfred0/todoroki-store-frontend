import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from '../select/select.module';
import { SelectAnimeComponent } from './select-anime.component';

@NgModule({
  declarations: [SelectAnimeComponent],
  imports: [CommonModule, SelectModule],
  exports: [SelectAnimeComponent],
})
export class SelectAnimeModule {}
