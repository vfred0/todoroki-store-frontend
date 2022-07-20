import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  Type,
} from '@angular/core';
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
export class CategoriesPageComponent implements AfterContentInit {
  sizes: Array<Size>;
  typesAnimes: Array<Option<TypeAnimes>>;
  typesClotings: Array<Option<TypeClothings>>;
  private products: Array<Product>;
  productsCardsFiltered: Array<Product>;
  colors: TypeColor[];
  size: Size;
  typeColor: TypeColor;
  typeAnime: Option<TypeClothings>;
  typeCloting: Option<TypeClothings>;

  constructor(private cd: ChangeDetectorRef) {
    this.productsCardsFiltered = [];
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

    this.size = Size.S;
    this.typeColor = TypeColor.Black;
    this.typeAnime = TypeAnimes.Anime1;
    this.typeCloting = TypeClothings.Shirt;
  }
  ngAfterContentInit(): void {
    this.products = [
      {
        id: 1,
        description: 'Camiseta1',
        color: TypeColor.Black,
        size: Size.S,
        typesAnimes: TypeAnimes.Anime,
        typeClothing: TypeClothings.Shirt,
        price: 10,
        image: 'https://picsum.photos/200/300',
        likes: 0,
      },
      {
        id: 2,
        description: 'Camiseta2',
        color: TypeColor.White,
        size: Size.M,
        typesAnimes: TypeAnimes.Anime1,
        typeClothing: TypeClothings.Shirt,
        price: 100,
        image: 'https://picsum.photos/200/300',
        likes: 0,
      },
    ];
    // this.productsCardsFiltered = this.products.filter(
    //   (product: Product) =>
    //     product.color === TypeColor.Black &&
    //     product.size === Size.S &&
    //     product.typesAnimes === TypeAnimes.Anime &&
    //     product.typeClothing === TypeClothings.Shirt
    // );

    // console.log(this.productsCardsFiltered);
    this.cd.detectChanges();
  }
  setProductsFiltered() {
    this.productsCardsFiltered = this.products.filter(
      (product: Product) =>
        product.color === this.typeColor &&
        product.size === this.size &&
        product.typesAnimes === this.typeAnime &&
        product.typeClothing === this.typeCloting
    );
  }
  getProductsCardsFiltered() {
    return this.productsCardsFiltered;
  }

  updateProductsByAnime(value: Option<TypeAnimes>) {
    this.typeAnime = value;
    this.setProductsFiltered();
  }
  updateProductsByCloth(value: Option<TypeClothings>) {
    this.typeCloting = value;
    this.setProductsFiltered();
  }

  updateProductsByColor(value: TypeColor) {
    this.typeColor = value;
    this.setProductsFiltered();
  }

  updateProductsBySize(size: Size) {
    this.size = size;
    this.setProductsFiltered();
  }
}
