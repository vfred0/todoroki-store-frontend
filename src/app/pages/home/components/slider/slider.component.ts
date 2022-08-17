import { Component, OnDestroy } from '@angular/core';
import { ProductMostWanted } from '@core/utils/ProductMostWanted';
import { ProductService } from '@shared/services/product.service';
import { Subscription } from 'rxjs';
import SwiperCore, { Autoplay, Pagination, Navigation, Parallax } from 'swiper';

SwiperCore.use([Autoplay]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnDestroy {
  productsMostWanted: Array<ProductMostWanted>;

  private subscriptions = new Subscription();

  constructor(private productService: ProductService) {
    this.productsMostWanted = [];
    this.subscriptions.add(
      this.productService
        .getProductsMostWanted()
        .subscribe((products: ProductMostWanted[]) => {
          this.productsMostWanted = products;
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
