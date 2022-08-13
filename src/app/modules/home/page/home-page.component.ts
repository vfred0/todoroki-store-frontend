import { Component } from '@angular/core';
<<<<<<< HEAD
import { TypeClothings } from '@core/models/TypeClothings';
import { Category } from '@core/utils/Category';
=======
import { ProductItemCart } from '@core/utils/ProductItemCart';
import { Size } from '@core/utils/Size';
import { Color } from '@core/utils/Color';
>>>>>>> main

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
