import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreManagementComponent } from './pages/store-management.component';

const routes: Routes = [
  {
    path: '',
    component: StoreManagementComponent,
  },
  {
    path: 'orders-management',
    loadChildren: () =>
      import(
        '@pages/store-management/pages/orders-management/orders-management.module'
      ).then(m => m.OrdersManagementModule),
  },
  {
    path: 'clothing-management',
    loadChildren: () =>
      import(
        '@pages/store-management/pages/clothing-management/clothing-managenent.module'
      ).then(m => m.ClothingManagenentModule),
  },
  {
    path: '**',
    component: StoreManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreManagementRoutingModule {}
