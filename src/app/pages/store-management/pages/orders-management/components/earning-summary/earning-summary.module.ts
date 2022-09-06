import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorModule } from '@shared/components/color/color.module';
import { TagModule } from '@shared/components/tag/tag.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { EarningSummaryComponent } from './earning-summary.component';

@NgModule({
  declarations: [EarningSummaryComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    ColorModule,
    TagModule,
  ],
  exports: [EarningSummaryComponent],
})
export class EarningSummaryModule {}
