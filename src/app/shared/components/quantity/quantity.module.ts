import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityComponent } from './quantity.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [QuantityComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [QuantityComponent],
})
export class QuantityModule {}
