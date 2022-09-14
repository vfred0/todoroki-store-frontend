import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './page/login/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@shared/components/button/button.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
})
export class LoginModule {}
