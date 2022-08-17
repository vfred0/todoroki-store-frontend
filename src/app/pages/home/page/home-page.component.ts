import { Component, OnDestroy } from '@angular/core';
import { ClothingType } from '@core/types/ClothingType';

import { Category } from '@core/utils/Category';
import { ProductCard } from '@core/utils/ProductCard';
import { ProductService } from '@shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnDestroy {
  categories: Array<Category>;
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
          });
        });
      })
    );

    this.categories = [];
    this.subscriptions.add(
      this.productService
        .getCategories()
        .subscribe((categories: Array<Category>) => {
          this.setCategories(categories);
        })
    );
  }
  setCategories(categories: Category[]) {
    Object.keys(ClothingType).forEach((key, index) => {
      categories.forEach((category: Category) => {
        if (key == category.name) {
          this.categories.push({
            name: Object.values(ClothingType)[index],
            quantity: category.quantity,
          });
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
