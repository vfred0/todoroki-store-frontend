import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './page/catalog-page.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogPageComponent,
  },
  {
    path: ':name',
    component: CatalogPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
