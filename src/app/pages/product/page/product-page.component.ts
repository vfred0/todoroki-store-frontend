import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Tag } from '@core/utils/Tag';
import { Size } from '@core/types/Size';

import { QuantityComponent } from '@shared/components/quantity/quantity.component';
import { Color } from '@core/types/Color';
import { Product } from '@core/models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@shared/services/product.service';
import { Subscription } from 'rxjs';
import { ProductSaled } from '@core/utils/ProductSaled';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductPageComponent implements OnDestroy {
  @ViewChild(QuantityComponent) quantity!: QuantityComponent;
  sizes: Array<Size>;
  likes: Tag;
  typeColors: Color[];
  product: Product;
  private productSaled: ProductSaled;

  private subscription: Subscription;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private cd: ChangeDetectorRef
  ) {
    this.productSaled = {} as ProductSaled;
    this.subscription = new Subscription();
    this.product = {} as Product;
    this.likes = {} as Tag;
    this.typeColors = [];
    this.sizes = [];

    this.subscription.add(
      this.productService
        .getProduct(this.router.snapshot.params['id'])
        .subscribe((product: Product) => {
          this.product = product;
          this.likes = {
            description: `${this.product.likes}`,
            pathIcon: 'assets/icons/heart.svg',
          };
        })
    );
    this.sizes = [...Object.values(Size)];
    this.typeColors = [...Object.values(Color)];
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  contactForWhatsapp() {
    this.productSaled = {
      productId: this.product.id,
      color: this.product.color,
      size: this.product.size,
      quantity: this.quantity.getValue(),
    };

    console.log('add to cart', this.productSaled);
  }

  addToCart() {
    // -
  }
  colorSelected(color: Color) {
    this.product.color = color;
    this.cd.detectChanges();
  }

  sizeSelected(size: Size) {
    this.product.size = size;
    this.cd.detectChanges();
  }
}
