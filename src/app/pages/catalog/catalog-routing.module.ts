import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatlogPageComponent } from './page/catalog-page.component';

const routes: Routes = [
  {
    path: '',
    component: CatlogPageComponent,
  },
  {
    path: ':name',
    component: CatlogPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
