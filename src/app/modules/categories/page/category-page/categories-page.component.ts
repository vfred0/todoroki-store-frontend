import { Component } from '@angular/core';
import { Product } from '@core/models/Product';
import { TypeAnimes } from '@core/models/TypeAnimes';
import { TypeClothings } from '@core/models/TypeClothings';

import { Option } from '@core/utils/Option';
import { Size } from '@core/utils/Size';
import { TypeColor } from '@core/utils/TypeColor';

@Component({
  selector: 'app-category-page',
  templateUrl: './categories-page.component.html',
})
export class CategoriesPageComponent {
  sizes: Array<Size>;
  typesAnimes: Array<Option<TypeAnimes>>;
  typesClotings: Array<Option<TypeClothings>>;
  private products: Array<Product>;
  colors: TypeColor[];
  constructor() {
    this.typesAnimes = [];
    this.typesClotings = [];
    this.products = [];
    this.colors = [...Object.values(TypeColor)];
    Object.values(TypeAnimes).forEach((value: string) =>
      this.typesAnimes.push(value)
    );
    Object.values(TypeClothings).forEach((value: string) =>
      this.typesClotings.push(value)
    );

    this.sizes = [...Object.values(Size)];
    this.products = [];

    this.setProductsFiltered();
  }
  setProductsFiltered() {}

  existsProductsFiltered() {}
  getProductsFiltered() {
    return [];
  }
  updateProductsByAnime(value: Option<TypeAnimes>) {
    console.log(Object.is(value, TypeAnimes.Anime));
    console.log(value);
  }
  updateProductsByCloth(value: Option<TypeClothings>) {
    console.log(value);
  }

  updateProductsByColor(value: TypeColor) {
    console.log(value);
  }

  updateProductsBySize(size: Size) {
    console.log(size);
  }
}
