import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { TagComponent } from './components/tag/tag.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ColorComponent } from './components/color/color.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    TagComponent,
    ColorComponent,
    QuantityComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    TagComponent,
    ColorComponent,
    QuantityComponent,
  ],
})
export class SharedModule {}
