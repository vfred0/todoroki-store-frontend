import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/Product';
import { ClothingTypeCard } from '@core/utils/ClothingTypeCard';
import { EarningSummary } from '@core/utils/EarningSummary';
import { ProductCard } from '@core/utils/ProductCard';

import { ProductFilter } from '@core/utils/ProductFilterd';
import { ProductMostWanted } from '@core/utils/ProductMostWanted';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  existsProduct(product: Product): Observable<boolean> {
    return this.client.post<boolean>(
      `${this.API_URL}/exists-product/`,
      product
    );
  }

  getProductForUpdate(): Product {
    return this.productForUpdate;
  }
  private readonly API_URL = `${environment.API_URL}/api/products`;
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

  setProductForUpdate(product: Product) {
    this.productForUpdate = product;
  }

  getClothingSummary(): Observable<EarningSummary[]> {
    return this.client.get<EarningSummary[]>(
      `${this.API_URL}/get-clothing-summary`
    );
  }

  getSimilarClothing(productFilter: ProductFilter): Observable<Product[]> {
    return this.client.post<Product[]>(
      `${this.API_URL}/get-similar-clothing`,
      productFilter
    );
  }

  existsProductForUpdate(): boolean {
    // behavior subject
    return this.productForUpdate.id != null;
    // return new Observable(observer => {
    //   observer.next(this.productForUpdate.id !== undefined);
    // });
  }
}
