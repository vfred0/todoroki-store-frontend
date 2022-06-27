import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent, CardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ButtonComponent],
})
export class SharedModule {}
