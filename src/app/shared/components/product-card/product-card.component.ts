import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCard } from '@core/utils/ProductCard';
import { Tag } from '@core/utils/Tag';
import { ProductService } from '@shared/services/product.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() productCard: ProductCard;
  @Input() isForManagement: boolean;
  @Output() deleteProductSelected: EventEmitter<string>;
  @Output() updateProduct: EventEmitter<ProductCard>;
  tag: Tag;
  constructor(private router: Router) {
    this.isForManagement = false;
    this.updateProduct = new EventEmitter<ProductCard>();
    this.productCard = {} as ProductCard;
    this.tag = {} as Tag;
    this.deleteProductSelected = new EventEmitter();
  }
  ngOnInit(): void {
    if (!this.isForManagement) {
      this.tag = {
        description: `${this.productCard.likes}`,
        pathIcon: 'assets/icons/heart.svg',
      };
    } else {
      this.tag = {
        description: 'Borrar',
        pathIcon: 'assets/icons/trash.svg',
      };
    }
  }

  redirectToPageProduct() {
    if (this.isForManagement) {
      this.updateProduct.emit(this.productCard);
    } else {
      this.router.navigate([`/product/${this.productCard.id}`]);
    }
  }

  deleteProduct() {
    this.deleteProductSelected.emit(this.productCard.id);
  }
}
