import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductCard } from '@core/utils/ProductCard';
import { Tag } from '@core/utils/Tag';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
})
export class ModalSearchComponent extends ModalComponent {
  productsCards: Array<ProductCard>;
  tag: Tag;
  constructor() {
    super();
    this.productsCards = [
      {
        id: 1,
        description: 'Camiseta 1dhsdhjsdhjd',
        price: 13.99,
        image: 'https://picsum.photos/200/100',
        likes: 130,
      },
      {
        id: 1,
        description: 'Camiseta 1dhsdhjsdhjd',
        price: 13.99,
        image: 'https://picsum.photos/200/100',
        likes: 130,
      },
      {
        id: 1,
        description: 'Camiseta 1dhsdhjsdhjd',
        price: 13.99,
        image: 'https://picsum.photos/200/100',
        likes: 130,
      },
      {
        id: 1,
        description: 'Camiseta 1dhsdhjsdhjd',
        price: 13.99,
        image: 'https://picsum.photos/200/100',
        likes: 130,
      },
      {
        id: 1,
        description: 'Camiseta 1dhsdhjsdhjd',
        price: 13.99,
        image: 'https://picsum.photos/200/100',
        likes: 130,
      },
      {
        id: 1,
        description: 'Camiseta 1dhsdhjsdhjd',
        price: 13.99,
        image: 'https://picsum.photos/200/100',
        likes: 130,
      },
      {
        id: 1,
        description: 'Camiseta 1dhsdhjsdhjd',
        price: 13.99,
        image: 'https://picsum.photos/200/100',
        likes: 130,
      },
      {
        id: 1,
        description: 'Camiseta 1dhsdhjsdhjd',
        price: 13.99,
        image: 'https://picsum.photos/200/100',
        likes: 130,
      },
      {
        id: 1,
        description: 'Camiseta 1dhsdhjsdhjd',
        price: 13.99,
        image: 'https://picsum.photos/200/100',
        likes: 130,
      },
    ];

    this.productsCards = [];
    this.tag = {
      description: 'Banana fish',
      pathIcon: '/assets/icons/search.svg',
    };
  }

  existsResults(): boolean {
    return this.productsCards.length > 0;
  }

  clickedTag(): void {
    console.log('DEBUG', 'clickedTag');
  }
}
