import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingManagementPageComponent } from './pages/clothing-management-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClothingManagementPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingManagenentRoutingModule {}
