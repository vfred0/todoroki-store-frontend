import { Component, ViewChild } from '@angular/core';
import { Product } from '@core/models/Product';
import { ProductCard } from '@core/utils/ProductCard';
import { ProductService } from '@shared/services/product.service';
import { ModalProductManagementComponent } from '../components/modal-product-management/modal-product-management.component';

@Component({
  selector: 'app-clothing-details-page',
  templateUrl: './clothing-details-page.component.html',
})
export class ClothingDetailsPageComponent {
  isActiveModalProductManagement: boolean = false;
  @ViewChild(ModalProductManagementComponent)
  modalProductManagement!: ModalProductManagementComponent;
  productsCards: ProductCard[];
  constructor(private productService: ProductService) {
    this.productsCards = [];
    this.setProductsCards();
  }

  setProductsCards() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.productsCards = products.map((product: Product) => {
        return {
          id: product.id,
          image: product.image,
          description: product.description,
          price: product.price,
          likes: product.likes,
        } as ProductCard;
      });
    });
  }

  onToggleProductManagement(): void {
    this.isActiveModalProductManagement = !this.isActiveModalProductManagement;
  }
  deleteProductById(id: string): void {
    this.productService.deleteProductById(id).subscribe(() => {
      this.setProductsCards();
    });
  }
  updateProduct(productCard: ProductCard): void {
    this.isActiveModalProductManagement = true;
    this.modalProductManagement.setProductForUpdate(productCard.id);
  }
}
