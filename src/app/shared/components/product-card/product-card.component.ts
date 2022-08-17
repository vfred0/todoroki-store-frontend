import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCard } from '@core/utils/ProductCard';
import { Tag } from '@core/utils/Tag';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() productCard: ProductCard;
  tagLikes: Tag;
  constructor(private router: Router) {
    this.productCard = {} as ProductCard;
    this.tagLikes = {} as Tag;
  }
  ngOnInit(): void {
    this.tagLikes = {
      description: `${this.productCard.likes}`,
      pathIcon: 'assets/icons/heart.svg',
    };
  }

  redirectToPageProduct() {
    this.router.navigate(['/product', this.productCard.id]);
  }
}
