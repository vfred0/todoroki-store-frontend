import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@core/models/Product';
import { Animes } from '@core/types/Animes';
import { Clothings } from '@core/types/Clothings';

import { Option } from '@core/utils/Option';
import { Size } from '@core/types/Size';
import { Color } from '@core/types/Color';

@Component({
  selector: 'app-category-page',
  templateUrl: './categories-page.component.html',
})
export class CategoriesPageComponent implements AfterContentInit {
  private products: Array<Product>;
  sizes: Array<Size>;
  typesAnimes: Array<Option<Animes>>;
  typesClotings: Array<Option<Clothings>>;
  productsCardsFiltered: Array<Product>;
  colors: Color[];
  size: Size;
  typeColor: Color;
  typeAnime: Option<Clothings>;
  typeCloting: Option<Clothings>;
  optionSelected: Option<Clothings>;

  constructor(private router: ActivatedRoute) {
    this.optionSelected = this.router.snapshot.params['name'];

    this.productsCardsFiltered = [];
    this.typesAnimes = [];
    this.typesClotings = [];
    this.products = [];
    this.colors = [...Object.values(Color)];
    Object.values(Animes).forEach((value: string) =>
      this.typesAnimes.push(value)
    );
    Object.values(Clothings).forEach((value: string) =>
      this.typesClotings.push(value)
    );

    this.sizes = [...Object.values(Size)];
    this.products = [];

    this.size = Size.S;
    this.typeColor = Color.Black;
    this.typeAnime = Animes.Anime1;
    this.typeCloting = Clothings.Shirt;
  }

  ngAfterContentInit(): void {
    this.products = [
      {
        id: '1',
        description: 'Camiseta1',
        color: Color.Black,
        size: Size.S,
        typesAnimes: Animes.Anime,
        typeClothing: Clothings.Shirt,
        price: 10,
        image: 'https://picsum.photos/200/300',
        likes: 0,
      },
      {
        id: '1',
        description: 'Camiseta2',
        color: Color.White,
        size: Size.M,
        typesAnimes: Animes.Anime1,
        typeClothing: Clothings.Shirt,
        price: 100,
        image: 'https://picsum.photos/200/300',
        likes: 0,
      },
    ];

    // this.cd.detectChanges();
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

  updateProductsByAnime(value: Option<Animes>) {
    this.typeAnime = value;
    this.setProductsFiltered();
  }
  updateProductsByCloth(value: Option<Clothings>) {
    this.typeCloting = value;
    this.setProductsFiltered();
  }

  updateProductsByColor(value: Color) {
    this.typeColor = value;
    this.setProductsFiltered();
  }

  updateProductsBySize(size: Size) {
    this.size = size;
    this.setProductsFiltered();
  }
}
