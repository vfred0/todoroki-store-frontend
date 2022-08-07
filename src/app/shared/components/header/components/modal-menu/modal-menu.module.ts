import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMenuComponent } from './modal-menu.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@shared/components/button/button.module';

@NgModule({
  declarations: [ModalMenuComponent],
  imports: [CommonModule, ButtonModule, RouterModule],
  exports: [ModalMenuComponent],
})
export class ModalMenuModule {}
