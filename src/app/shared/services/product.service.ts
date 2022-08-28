import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/Product';
import { ClothingTypeCard } from '@core/utils/ClothingTypeCard';

import { ProductFilter } from '@core/utils/ProductFilterd';
import { ProductMostWanted } from '@core/utils/ProductMostWanted';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductForUpdate(): Product {
    throw new Error('Method not implemented.');
  }
  private readonly API_URL = 'http://localhost:8080/api/products';
  private productForUpdate: Product;

  constructor(private client: HttpClient) {
    this.productForUpdate = {} as Product;
  }

  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.API_URL}/get-all`);
  }

  getProductById(id: string): Observable<Product> {
    return this.client.post<Product>(`${this.API_URL}/get-product-by-id/`, {
      productId: id,
    });
  }

  save(product: Product): Observable<Product> {
    return this.client.post<Product>(`${this.API_URL}/save`, product);
  }

  update(product: Product): Observable<Product> {
    return this.client.put<Product>(`${this.API_URL}/update`, product);
  }

  deleteProductById(id: string): Observable<void> {
    let response = {
      productId: id,
    };
    return this.client.delete<void>(`${this.API_URL}/delete-by-id/`, {
      body: response,
    });
  }

  getProductsFiltered(productFilter: ProductFilter): Observable<Product[]> {
    return this.client.post<Product[]>(
      `${this.API_URL}/filtered`,
      productFilter
    );
  }

  getProductsMostWanted(): Observable<ProductMostWanted[]> {
    return this.client.get<ProductMostWanted[]>(
      `${this.API_URL}/get-most-wanted`
    );
  }

  getClothingTypeCards(): Observable<ClothingTypeCard[]> {
    return this.client.get<ClothingTypeCard[]>(
      `${this.API_URL}/get-clothing-types`
    );
  }

  setProductForUpdate(id: string) {
    this.getProductById(id).subscribe((product: Product) => {
      this.productForUpdate = product;
      console.log('Se ha guarddado el producto: ', this.productForUpdate);
    });
  }

  existsProductForUpdate(): Observable<boolean> {
    // behavior subject
    return new Observable(observer => {
      observer.next(this.productForUpdate.id !== undefined);
    });
  }
}
