import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSearchComponent } from './modal-search.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from '@shared/components/button/button.module';
import { ProductCardModule } from '@shared/components/product-card/product-card.module';
import { TagModule } from '@shared/components/tag/tag.module';

@NgModule({
  declarations: [ModalSearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductCardModule,
    TagModule,
    ButtonModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [ModalSearchComponent],
})
export class ModalSearchModule {}
