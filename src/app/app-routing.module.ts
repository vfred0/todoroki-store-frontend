import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('@modules/product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('@modules/categories/categories.module').then(
        m => m.CategoriesModule
      ),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('@modules/shopping-cart/shopping-cart.module').then(
        m => m.ShoppingCartModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
