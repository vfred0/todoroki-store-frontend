import { Component, OnDestroy } from '@angular/core';
import { ClothingType } from '@core/types/ClothingType';
import { ClothingTypeCard } from '@core/utils/ClothingTypeCard';

import { ProductCard } from '@core/utils/ProductCard';
import { ProductService } from '@shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnDestroy {
  clothingTypeCards: Array<ClothingTypeCard>;
  productsCards: Array<ProductCard>;

  private subscriptions = new Subscription();

  constructor(private productService: ProductService) {
    this.productsCards = [];
    this.subscriptions.add(
      this.productService.getProducts().subscribe((products: ProductCard[]) => {
        products.forEach((product: ProductCard) => {
          this.productsCards.push({
            id: product.id,
            description: product.description,
            price: product.price,
            image: product.image,
            likes: product.likes,
            color: product.color,
          });
        });
      })
    );

    this.clothingTypeCards = [];
    this.subscriptions.add(
      this.productService
        .getClothingTypeCards()
        .subscribe((categories: Array<ClothingTypeCard>) => {
          this.setCategories(categories);
        })
    );
  }
  setCategories(categories: ClothingTypeCard[]) {
    Object.keys(ClothingType).forEach((key, index) => {
      categories.forEach((clothingTypeCard: ClothingTypeCard) => {
        if (key == clothingTypeCard.name) {
          this.clothingTypeCards.push({
            name: Object.values(ClothingType)[index],
            quantity: clothingTypeCard.quantity,
          });
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
