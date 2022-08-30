import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '@core/models/Product';
import { Animes } from '@core/types/Animes';
import { ClothingType } from '@core/types/ClothingType';
import { Color } from '@core/types/Color';
import { ActionForProduct } from '@core/utils/ActionForProduct';
import { Option } from '@core/utils/Option';
import { ModalComponent } from '@shared/components/header/components/modal/modal.component';
import { SelectColorComponent } from '@shared/components/select-color/select-color.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { ProductService } from '@shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-product-management',
  templateUrl: './modal-product-management.component.html',
})
export class ModalProductManagementComponent
  extends ModalComponent
  implements OnDestroy
{
  formGroup: FormGroup;
  product: Product;
  @Output() updateProducts: EventEmitter<void>;
  @ViewChild(SelectColorComponent) selectColorComponent!: SelectColorComponent;
  @ViewChild('selectAnime') selectAnimeComponent!: SelectComponent;
  @ViewChild('selectClothingType')
  selectClothingTypeComponent!: SelectComponent;
  actionForProduct: ActionForProduct;
  private subscription: Subscription;

  constructor(private productService: ProductService) {
    super();
    this.actionForProduct = ActionForProduct.Save;
    this.updateProducts = new EventEmitter<void>();
    this.subscription = new Subscription();
    this.product = {} as Product;
    this.formGroup = new FormGroup({
      description: new FormControl('', Validators['required']),
      price: new FormControl('', Validators['required']),
      likes: new FormControl('', Validators['required']),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onFileSelected(file: any) {
    if (file.target.files) {
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (event: any) => {
        this.product.image = event.target.result;
      };
    }
  }

  saveOrUpdateProduct() {
    if (this.formGroup.valid) {
      this.product.description = this.formGroup.value.description;
      this.product.price = this.formGroup.value.price;
      this.product.likes = this.formGroup.value.likes;
      if (this.actionForProduct === ActionForProduct.Save) {
        this.subscription.add(
          this.productService.save(this.product).subscribe(() => {
            this.cleanProductDetails();
          })
        );
      } else if (this.actionForProduct === ActionForProduct.Update) {
        this.subscription.add(
          this.productService.update(this.product).subscribe(() => {
            this.updateProducts.emit();
            this.onToggle();
          })
        );
      }
    }
  }

  getAnimes(): Array<Option<Animes>> {
    return Object.values(Animes);
  }

  getClothingTypes(): Array<Option<ClothingType>> {
    return Object.values(ClothingType);
  }
  animeSelected(anime: Option<Animes>) {
    this.product.anime = anime as Animes;
  }
  colorSelected(color: Color) {
    this.product.color = color;
  }
  clothingTypeSelected(clothingType: Option<ClothingType>) {
    this.product.clothingType = Object.keys(ClothingType)[
      Object.values(ClothingType).findIndex(key => key === clothingType)
    ] as ClothingType;
  }

  setProductForUpdate(id: string) {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
      this.formGroup.setValue({
        description: this.product.description,
        price: this.product.price,
        likes: this.product.likes,
      });
      this.selectColorComponent.setColorSelected(this.product.color);
      this.selectAnimeComponent.setOptionSelected(this.product.anime);
      let optionClothingType = Object.values(ClothingType)[
        Object.keys(ClothingType).findIndex(
          key => key === this.product.clothingType
        )
      ] as ClothingType;
      this.selectClothingTypeComponent.setOptionSelected(optionClothingType);
      this.actionForProduct = ActionForProduct.Update;
    });
  }

  override onToggle(): void {
    super.onToggle();
    this.updateProducts.emit();
    this.cleanProductDetails();
    this.actionForProduct = ActionForProduct.Save;
  }

  private cleanProductDetails() {
    this.formGroup.reset();
    this.product = {} as Product;
    this.selectColorComponent.setColorSelected(Color.Black);
    this.selectAnimeComponent.setOptionSelected(Animes.Banana_fish);
    this.selectClothingTypeComponent.setOptionSelected(ClothingType.Shirts);
  }
}
