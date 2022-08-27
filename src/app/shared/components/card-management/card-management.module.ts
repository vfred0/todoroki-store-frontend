import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardManagementComponent } from './card-management.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [CardManagementComponent],
  imports: [CommonModule, AngularSvgIconModule.forRoot()],
  exports: [CardManagementComponent],
})
export class CardManagementModule {}
