import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/Product';
import { Category } from '@core/utils/Category';
import { ProductFilter } from '@core/utils/ProductFilterd';
import { ProductMostWanted } from '@core/utils/ProductMostWanted';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = 'http://localhost:8080/api/products';

  constructor(private client: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.API_URL}/get-all`);
  }

  getProduct(id: string): Observable<Product> {
    return this.client.post<Product>(`${this.API_URL}/get-product-by-id/`, {
      productId: id,
    });
  }

  createProduct(product: Product): Observable<Product> {
    return this.client.post<Product>(`${this.API_URL}/save`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.client.put<Product>(`${this.API_URL}/update`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.client.delete<Product>(`${this.API_URL}/delete/`, {
      params: { productId: id },
    });
  }

  getProductsFiltered(productFilter: ProductFilter): Observable<Product[]> {
    return this.client.post<Product[]>(
      `${this.API_URL}/filtered`,
      productFilter
    );
  }

  getProductsMostWanted(): Observable<ProductMostWanted[]> {
    return this.client.post<ProductMostWanted[]>(
      `${this.API_URL}/most-wanted`,
      {}
    );
  }

  getCategories(): Observable<Category[]> {
    return this.client.post<Category[]>(`${this.API_URL}/get-categories`, {});
  }
}
