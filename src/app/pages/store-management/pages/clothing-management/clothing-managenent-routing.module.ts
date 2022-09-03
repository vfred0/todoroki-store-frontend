import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionForProduct } from '@core/utils/ActionForProduct';
import { UpdateClothingDetailsGuard } from '@shared/guards/update-clothing-details.guard';
import { ClothingManagementPageComponent } from './pages/clothing-management-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClothingManagementPageComponent,
  },

  {
    path: 'clothing-details/save',
    loadChildren: () =>
      import('./pages/clothing-details/clothing-details.module').then(
        m => m.ClothingDetailsModule
      ),
    data: {
      actionForProduct: ActionForProduct.Save,
    },
  },
  {
    path: 'clothing-details/update',
    loadChildren: () =>
      import('./pages/clothing-details/clothing-details.module').then(
        m => m.ClothingDetailsModule
      ),
    data: {
      actionForProduct: ActionForProduct.Update,
    },
    canActivate: [UpdateClothingDetailsGuard],
    canLoad: [UpdateClothingDetailsGuard],
  },
  {
    path: 'clothing-list',
    loadChildren: () =>
      import('./pages/clothing-list/clothing-list.module').then(
        m => m.ClothingListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingManagenentRoutingModule {}
