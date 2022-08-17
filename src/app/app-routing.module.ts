import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('src/app/pages/product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('@pages/catalog/catalog.module').then(m => m.CatalogModule),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('src/app/pages/shopping-cart/shopping-cart.module').then(
        m => m.ShoppingCartModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
