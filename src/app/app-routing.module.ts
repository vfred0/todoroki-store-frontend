import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';

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
    path: 'login',
    loadChildren: () =>
      import('src/app/pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'clothing-management',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@pages/clothing-managenent/clothing-managenent.module').then(
        m => m.ClothingManagenentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
