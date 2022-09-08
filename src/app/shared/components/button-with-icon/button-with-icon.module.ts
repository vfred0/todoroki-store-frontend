import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWithIconComponent } from './button-with-icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  declarations: [ButtonWithIconComponent],
  imports: [
    CommonModule, AngularSvgIconModule.forRoot()],
  exports: [ButtonWithIconComponent]
})
export class ButtonWithIconModule { }
