import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TypeClothings } from '@core/models/TypeClothings';
import { Category } from '@core/utils/Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @Input() category: Category;

  constructor(private router: Router) {
    this.category = {
      name: TypeClothings.Sweatshirt,
      quantity: 10,
    };
  }

  redirectToPageCategory() {
    this.router.navigate(['/categories', this.category.name]);
  }
}
