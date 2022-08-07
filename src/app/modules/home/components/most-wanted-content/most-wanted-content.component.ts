import { Component, Input } from '@angular/core';
import { ProductMostWanted } from '@core/utils/ProductMostWanted';

@Component({
  selector: 'app-most-wanted-content',
  templateUrl: './most-wanted-content.component.html',
})
export class MostWantedContentComponent {
  @Input() productMostWanted: ProductMostWanted;

  constructor() {
    this.productMostWanted = {
      id: 1,
      description: 'Mokey de Fish',
    };
  }
}
