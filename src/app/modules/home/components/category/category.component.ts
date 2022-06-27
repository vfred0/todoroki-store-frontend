import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @Input() nameCategory: string = 'Camisetas';
  @Input() quantity: number = 10;
  constructor() {}
}
