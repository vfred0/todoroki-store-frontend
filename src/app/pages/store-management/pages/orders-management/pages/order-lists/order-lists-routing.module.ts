import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListsComponent } from './order-lists.component';

const routes: Routes = [
  {
    path: '',
    component: OrderListsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderListsRoutingModule {}
