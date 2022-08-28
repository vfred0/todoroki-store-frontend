import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BackMenuComponent } from './back-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BackMenuComponent],
  imports: [CommonModule, RouterModule, AngularSvgIconModule.forRoot()],
  exports: [BackMenuComponent],
})
export class BackMenuModule {}
