import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersManagementComponent } from './pages/orders-management.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersManagementComponent,
  },
  {
    path: 'order-lists',
    loadChildren: () =>
      import('./pages/order-lists/order-lists.module').then(
        m => m.OrderListsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersManagementRoutingModule {}
