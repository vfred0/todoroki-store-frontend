import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { TagComponent } from './components/tag/tag.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent, CardComponent, TagComponent],
  imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  exports: [HeaderComponent, ButtonComponent, CardComponent, TagComponent],
})
export class SharedModule {}
