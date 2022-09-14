import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { InputWithIconComponent } from './input-with-icon.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputWithIconComponent],
  imports: [CommonModule, AngularSvgIconModule.forRoot(), ReactiveFormsModule],
  exports: [InputWithIconComponent],
})
export class InputWithIconModule {}
