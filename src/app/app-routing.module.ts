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
    path: 'store-management',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@pages/store-management/store-management.module').then(
        m => m.StoreManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
