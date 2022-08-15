import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Clothings } from '@core/types/Clothings';
import { Category } from '@core/utils/Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @Input() category: Category;

  constructor(private router: Router) {
    this.category = {
      name: Clothings.Sweatshirt,
      quantity: 10,
    };
  }

  redirectToPageCategory() {
    this.router.navigate(['/categories', this.category.name]);
  }
}
