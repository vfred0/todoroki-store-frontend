import { Component } from '@angular/core';
import { TypeClothings } from '@core/models/TypeClothings';
import { Category } from '@core/utils/Category';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  categories: Category[] = [
    {
      name: TypeClothings.Sweatshirt,
      quantity: 10,
    },
    {
      name: TypeClothings.Shirt,
      quantity: 100,
    },
  ];
}
