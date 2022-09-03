import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingListPageComponent } from './page/clothing-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClothingListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingListRoutingModule {}
