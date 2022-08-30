import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListsPageComponent } from './page/order-lists-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrderListsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderListsRoutingModule {}
