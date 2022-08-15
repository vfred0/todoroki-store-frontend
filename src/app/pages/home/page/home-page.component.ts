import { Component } from '@angular/core';
import { Clothings } from '@core/types/Clothings';
import { Category } from '@core/utils/Category';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  categories: Category[] = [
    {
      name: Clothings.Sweatshirt,
      quantity: 10,
    },
    {
      name: Clothings.Shirt,
      quantity: 100,
    },
  ];
}
