import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  exports: [ButtonComponent],
})
export class ButtonModule {}
