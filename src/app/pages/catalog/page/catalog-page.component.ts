import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@core/models/Product';
import { Animes } from '@core/types/Animes';
import { ClothingType } from '@core/types/ClothingType';

import { Option } from '@core/utils/Option';
import { Size } from '@core/types/Size';
import { Color } from '@core/types/Color';
import { ProductService } from '@shared/services/product.service';
import { ProductFilter } from '@core/utils/ProductFilterd';

@Component({
  selector: 'app-clothing-type-card-page',
  templateUrl: './catalog-page.component.html',
})
export class CatalogPageComponent {
  private productFilter: ProductFilter;
  productsCardsFiltered: Array<Product>;
  clothingTypeSelected: string;
  typeColor: Color;
  size: Size;
  typeClothing: Option<ClothingType>;
  typeAnime: Option<Animes>;
  animeOptions: Array<Option<Animes>>;
  typeClothingsOptions: Array<Option<ClothingType>>;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productFilter = {} as ProductFilter;

    this.productsCardsFiltered = [];
    this.typeAnime = {} as Animes;
    this.typeClothing = {} as ClothingType;
    this.typeColor = Color.Black;
    this.size = Size.S;
    this.animeOptions = [];
    this.typeClothingsOptions = [];
    this.typeClothing = ClothingType.Shirts;

    Object.values(Animes).forEach((value: string) =>
      this.animeOptions.push(value)
    );
    Object.values(ClothingType).forEach((value: string) =>
      this.typeClothingsOptions.push(value)
    );
    this.clothingTypeSelected = this.router.snapshot.params['name'];
  }

  setProductsFiltered() {
    this.productFilter = {
      size: this.size,
      color: this.typeColor,
      anime: this.typeAnime as Animes,
      clothingType: Object.keys(ClothingType)[
        Object.values(ClothingType).findIndex(key => key === this.typeClothing)
      ] as ClothingType,
      // clothingType: Object.keys(ClothingType)[
      //   Object.values(ClothingType).findIndex(key => key === this.typeClothing)
      // ] as ClothingType,
      limit: 10,
      page: 1,
    };
    this.productService
      .getProductsFiltered(this.productFilter)
      .subscribe((products: Array<Product>) => {
        this.productsCardsFiltered = products;
      });
  }
  getProductsCardsFiltered() {
    return this.productsCardsFiltered;
  }

  updateProductsByAnime(value: Option<Animes>) {
    this.typeAnime = value;
    this.setProductsFiltered();
  }
  updateProductsByCloth(value: Option<ClothingType>) {
    this.typeClothing = value;
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
