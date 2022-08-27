import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { Product } from '@core/models/Product';
import { ProductCard } from '@core/utils/ProductCard';
import { ProductService } from '@shared/services/product.service';
import { UserService } from '@shared/services/user.service';
import { ModalProductManagementComponent } from '../components/modal-product-management/modal-product-management.component';

@Component({
  selector: 'app-clothing-management-page',
  templateUrl: './clothing-management-page.component.html',
})
export class ClothingManagementPageComponent {
  isActiveModalProductManagement: boolean = false;
  @ViewChild(ModalProductManagementComponent)
  modalProductManagement!: ModalProductManagementComponent;
  productsCards: ProductCard[];
  constructor(
    private userService: UserService,
    private router: Router,
    private productService: ProductService
  ) {
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

  logout() {
    this.userService.deleteAuthentication();
    this.router.navigate(['/login']);
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
    // this.productService.setProductForUpdate(productCard.id);
  }
}
