import { Component, Input } from '@angular/core';
import { ClothingType } from '@core/types/ClothingType';

import { Category } from '@core/utils/Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @Input() category: Category;

  constructor() {
    this.category = {
      name: ClothingType.Sweatshirt,
      quantity: 10,
    };
  }
}
