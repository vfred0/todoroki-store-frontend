import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  exports: [TagComponent],
})
export class TagModule {}
