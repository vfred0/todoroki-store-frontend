import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonWithIconModule } from '@shared/components/button-with-icon/button-with-icon.module';
import { OrderDetailsPageComponent } from './page/order-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailsRoutingModule {}
