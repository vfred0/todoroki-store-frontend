import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@core/models/Product';
import { Animes } from '@core/types/Animes';
import { ClothingType } from '@core/types/ClothingType';
import { Color } from '@core/types/Color';
import { ActionForProduct } from '@core/utils/ActionForProduct';
import { ClothingDetailsManagement } from '@core/utils/ClothingDetailsManagement';
import { SelectAnimeComponent } from '@shared/components/select-anime/select-anime.component';
import { SelectClothingTypeComponent } from '@shared/components/select-clothing-type/select-clothing-type.component';
import { SelectColorComponent } from '@shared/components/select-color/select-color.component';
import { ProductService } from '@shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clothing-details-page',
  templateUrl: './clothing-details-page.component.html',
})
export class ClothingDetailsPageComponent implements OnDestroy, AfterViewInit {
  product: Product;
  actionForProduct: ActionForProduct;
  private subscription: Subscription;
  @ViewChild(SelectClothingTypeComponent)
  selectClothingTypeComponent!: SelectClothingTypeComponent;
  @ViewChild(SelectColorComponent)
  selectColorComponent!: SelectColorComponent;
  @ViewChild(SelectAnimeComponent)
  selectAnimeComponent!: SelectAnimeComponent;
  clothingDetailsManagement: ClothingDetailsManagement;
  ERRORS: string;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    this.ERRORS = '';
    this.clothingDetailsManagement = new ClothingDetailsManagement();
    this.product = {} as Product;
    this.actionForProduct = ActionForProduct.Save;
    this.subscription = new Subscription();
    this.actionForProduct =
      this.activatedRoute.snapshot.data['actionForProduct'];
  }
  ngAfterViewInit(): void {
    if (this.actionForProduct == ActionForProduct.Update) {
      this.product = this.productService.getProductForUpdate();
      this.clothingDetailsManagement.setProduct(this.product);
      this.selectClothingTypeComponent.setClothingType(
        this.product.clothingType
      );
      this.selectColorComponent.setColorSelected(this.product.color);
      this.selectAnimeComponent.setAnime(this.product.anime);
      this.cd.detectChanges();
    }
    this.clothingDetailsManagement.subscribeToPreviewImage();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setClothingType(clothingType: ClothingType) {
    this.product.clothingType = clothingType;
  }

  setAnime(anime: Animes) {
    this.product.anime = anime;
  }

  setColor(color: Color) {
    this.product.color = color;
  }

  isDisabled(): boolean {
    if (this.actionForProduct == ActionForProduct.Update) {
      return !this.clothingDetailsManagement.isUpdatableProductFrom(
        this.product
      );
    }
    return !this.clothingDetailsManagement.formGroupIsValid();
  }

  saveOrUpdateProduct() {
    this.ERRORS = '';
    let product: Product = this.clothingDetailsManagement.getProductFrom(
      this.product
    );

    this.subscription.add(
      this.productService
        .existsProduct(product)
        .subscribe((existsProduct: boolean) => {
          if (!existsProduct) {
            if (this.actionForProduct == ActionForProduct.Update) {
              this.subscription.add(
                this.productService.update(product).subscribe(() => {
                  this.clothingDetailsManagement.cleanProductDetails();
                  console.log('Update');
                })
              );
            } else {
              this.subscription.add(
                this.productService.save(product).subscribe(() => {
                  this.clothingDetailsManagement.cleanProductDetails();
                  console.log('Save');
                })
              );
            }
          } else {
            this.ERRORS = 'La ropa ya existe';
          }
        })
    );
  }
}
