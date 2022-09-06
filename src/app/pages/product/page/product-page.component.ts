import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
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
import { ProductOrder } from '@core/utils/ProductOrder';
import { ShoppingCartService } from '@shared/services/shopping-cart.service';
import { ProductItemCart } from '@core/utils/ProductItemCart';
import { ProductCard } from '@core/utils/ProductCard';
import { ProductFilter } from '@core/utils/ProductFilterd';
import { OrderService } from '@shared/services/order.service';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnDestroy {
  private productOrder: ProductOrder;
  private subscription: Subscription;
  @ViewChild(QuantityComponent) quantity!: QuantityComponent;
  sizes: Array<Size>;
  likes: Tag;
  typeColors: Color[];
  product: Product;
  productsSimilarity: ProductCard[];

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private cd: ChangeDetectorRef,
    private shoppingcartService: ShoppingCartService,
    private orderService: OrderService
  ) {
    this.productOrder = {} as ProductOrder;
    this.subscription = new Subscription();
    this.product = {} as Product;
    this.likes = {} as Tag;
    this.typeColors = [];
    this.sizes = [];

    this.subscription.add(
      this.productService
        .getProductById(this.router.snapshot.params['id'])
        .subscribe((product: Product) => {
          this.product = product;
          this.likes = {
            description: `${this.product.likes}`,
            pathIcon: 'assets/icons/heart.svg',
          };
        })
    );
    this.productsSimilarity = [];
    // this.subscription.add(
    //   this.productService
    //     .getSimilarClothing({
    //       color: this.product.color,
    //       clothingType: this.product.clothingType,
    //       anime: this.product.anime,
    //       limit: 4,
    //       page: 1,
    //     } as ProductFilter)
    //     .subscribe(products => {
    //       this.productsSimilarity = products;
    //     })
    // );

    this.sizes = [...Object.values(Size)];
    this.typeColors = [...Object.values(Color)];
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  contactForWhatsapp() {
    this.productOrder = {
      productId: this.product.id,
      color: this.product.color,
      size: this.productOrder.size,
      quantity: this.quantity.getValue(),
      price: this.quantity.getValue() * this.product.price,
    };

    console.log(
      'ORDen',
      this.product.price,
      JSON.stringify({
        quantity: this.productOrder.quantity,
        price: this.productOrder.price,
        productOrders: [this.productOrder],
      })
    );

    this.orderService
      .save({
        quantity: this.productOrder.quantity,
        price: this.productOrder.price,
        productOrders: [this.productOrder],
      })
      .subscribe((orderNumber: number) => {
        let message: string = `Hola, mi número de orden es ${orderNumber}`;
        window.open(
          `https://api.whatsapp.com/send?phone=593939076291&text=${message}`
        );
      });
  }

  addToCart() {
    this.shoppingcartService.addItem({
      id: this.product.id,
      image: this.product.image,
      description: this.product.description,
      color: this.product.color,
      size: this.productOrder.size,
      price: this.product.price,
      quantity: this.quantity.getValue(),
    } as ProductItemCart);
  }
  // colorSelected(color: Color) {
  //   this.productOrder.color = color;
  //   this.cd.detectChanges();
  // }

  sizeSelected(size: Size) {
    this.productOrder.size = size;
    this.cd.detectChanges();
  }
}
