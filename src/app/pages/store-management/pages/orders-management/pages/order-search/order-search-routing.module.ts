import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderSearchPageComponent } from './page/order-search-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrderSearchPageComponent,
    // loadChildren: () =>
    //   import('./page/order-search-page.component').then(
    //     m => m.OrderSearchPageComponent
    //   ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderSearchRoutingModule {}
