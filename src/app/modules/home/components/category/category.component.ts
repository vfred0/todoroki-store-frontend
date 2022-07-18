import { Component, Input } from '@angular/core';
import { Tag } from '@core/utils/Tag';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @Input() nameCategory: string = 'Camisetas';
  @Input() quantity: number = 10;

  constructor() {}
}
