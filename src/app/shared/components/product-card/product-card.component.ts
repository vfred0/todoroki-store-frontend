import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCard } from '@core/utils/ProductCard';
import { Tag } from '@core/utils/Tag';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() productCard: ProductCard;
  tagLikes: Tag;
  constructor(private router: Router) {
    this.productCard = {
      id: 1,
      description: 'Camiseta 1',
      price: 10,
      image: 'https://picsum.photos/200/100',
      likes: 130,
    };
    this.tagLikes = {
      description: this.productCard.likes.toString(),
      pathIcon: 'assets/icons/heart.svg',
    };
  }

  redirectToPageProduct() {
    this.router.navigate(['/product', this.productCard.id]);
  }
}
