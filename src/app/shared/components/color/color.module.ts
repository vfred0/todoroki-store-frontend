import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ColorComponent],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  exports: [ColorComponent],
})
export class ColorModule {}
