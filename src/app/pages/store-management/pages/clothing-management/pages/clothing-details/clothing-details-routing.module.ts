import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingDetailsPageComponent } from './page/clothing-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClothingDetailsPageComponent,
  },
  // {
  //   path: 'clothing-details/:id',
  //   component: ClothingDetailsPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingDetailsRoutingModule {}
