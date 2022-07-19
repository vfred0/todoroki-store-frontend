import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('@modules/product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('@modules/categories/categories.module').then(
        m => m.CategoriesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
