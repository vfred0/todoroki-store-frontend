import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './page/categories-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPageComponent,
  },
  {
    path: ':name',
    component: CategoriesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
