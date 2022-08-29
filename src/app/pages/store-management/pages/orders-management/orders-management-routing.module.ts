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
  {
    path: 'order-details/:orderNumber',
    loadChildren: () =>
      import('./pages/order-details/order-details.module').then(
        m => m.OrderDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersManagementRoutingModule {}
