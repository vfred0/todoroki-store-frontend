import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@core/models/Product';
import { Animes } from '@core/types/Animes';
import { ClothingType } from '@core/types/ClothingType';
import { Color } from '@core/types/Color';
import { ProductCard } from '@core/utils/ProductCard';
import { ProductFilter } from '@core/utils/ProductFilterd';
import { ProductService } from '@shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clothing-list-page',
  templateUrl: './clothing-list-page.component.html',
})
export class ClothingListPageComponent implements OnInit {
  private subcription: Subscription;
  private productFilter: ProductFilter;
  productsCard: ProductCard[];
  private products: Product[];

  constructor(private productService: ProductService, private router: Router) {
    this.productsCard = [];
    this.subcription = new Subscription();
    this.productFilter = {} as ProductFilter;
    this.products = [];
  }

  ngOnInit(): void {
    this.setProductsFiltered();
  }

  updateProductsByClothingType(option: ClothingType) {
    this.productFilter.clothingType = option;
    this.setProductsFiltered();
  }

  updateProductsByColor(color: Color) {
    this.productFilter.color = color;
    this.setProductsFiltered();
  }

  updateProductsByAnimes(option: Animes) {
    this.productFilter.anime = option;
    this.setProductsFiltered();
  }
  setProductsFiltered() {
    this.productFilter.limit = 10;
    this.productFilter.page = 1;
    if (
      this.productFilter.anime &&
      this.productFilter.color &&
      this.productFilter.clothingType
    ) {
      this.subcription.add(
        this.productService
          .getProductsFiltered(this.productFilter)
          .subscribe(products => {
            this.products = products;

            this.productsCard = products.map(product => {
              return {
                id: product.id,
                description: product.description,
                price: product.price,
                image: product.image,
                likes: product.likes,
              } as ProductCard;
            });
            console.log(products);
          })
      );
    }
  }

  updateProduct(productCard: ProductCard) {
    console.log(
      'editar',
      this.products[
        this.products.findIndex((item: Product) => item.id === productCard.id)
      ]
    );
    this.productService.setProductForUpdate(
      this.products[
        this.products.findIndex((item: Product) => item.id === productCard.id)
      ]
    );
    this.router.navigate([
      '/store-management/clothing-management/clothing-details/update',
    ]);
    // {
    //   state: {
    //     data: {
    //       product:
    //         this.products[
    //           this.products.findIndex(
    //             (item: Product) => item.id === productCard.id
    //           )
    //         ],
    //     },
    //   },
    // }
  }
  deleteProductSelected(id: string) {
    this.subcription.add(
      this.productService.deleteProductById(id).subscribe(() => {
        this.setProductsFiltered();
      })
    );
  }
}
