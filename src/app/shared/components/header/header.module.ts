import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { RouterModule } from '@angular/router';
import { ButtonModule } from '../button/button.module';
import { HttpClientModule } from '@angular/common/http';

import { ModalMenuModule } from './components/modal-menu/modal-menu.module';
import { ModalShoppingCartModule } from './components/modal-shopping-cart/modal-shopping-cart.module';
import { ModalSearchModule } from './components/modal-search/modal-search.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    ModalMenuModule,
    ModalShoppingCartModule,
    ModalSearchModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
