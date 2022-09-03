import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/Product';

export class ClothingDetailsManagement {
  formGroupIsValid(): boolean {
    return this.formGroup.valid;
  }
  cleanProductDetails() {
    this.formGroup.reset();
    this.previewImage = '';
  }
  getFormGroup(): FormGroup<any> {
    return this.formGroup;
  }
  private product: Product;
  private previewImage: string;
  private formGroup: FormGroup;

  setProduct(product: Product) {
    this.product = { ...product };
    this.setValues();
  }
  isUpdatableProductFrom(product: Product): boolean {
    let price: number = this.formGroup.get('price')!.value;
    let image: string = this.formGroup.get('image')!.value;
    let likes: number = this.formGroup.get('likes')!.value;
    return (
      image != this.product.image ||
      price != this.product.price ||
      likes != this.product.likes ||
      product.color != this.product.color ||
      product.clothingType != this.product.clothingType ||
      product.anime != this.product.anime
    );
  }
  getProductFrom(product: Product): Product {
    return {
      id: product.id,
      price: this.formGroup.get('price')!.value,
      likes: this.formGroup.get('likes')!.value,
      color: product.color,
      image: this.previewImage,
      clothingType: product.clothingType,
      anime: product.anime,
    } as Product;
  }
  private setValues() {
    this.formGroup.get('price')!.setValue(this.product.price);
    this.formGroup.get('likes')!.setValue(this.product.likes);
    this.formGroup.get('image')!.setValue(this.product.image);
    this.previewImage = this.product.image;
    this.subscribeToPreviewImage();
  }

  subscribeToPreviewImage() {
    this.formGroup.get('image')!.valueChanges.subscribe((image: string) => {
      if (image && image.includes('sharing')) {
        let id: string = image.match(/d\/([A-Za-z0-9\-_]+)/)![1] || '';
        this.previewImage = `https://drive.google.com/uc?export=view&id=${id}`;
      }
    });
  }

  getPreviewImage(): string {
    return this.previewImage;
  }
  constructor() {
    this.product = {} as Product;
    this.previewImage = '';
    this.formGroup = new FormGroup({
      price: new FormControl('', Validators['required']),
      likes: new FormControl('', Validators['required']),
      image: new FormControl('', Validators['required']),
    });
  }
}
