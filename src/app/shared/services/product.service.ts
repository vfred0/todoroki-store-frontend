import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/Product';
import { Size } from '@core/types/Size';
import { ProductFilter } from '@core/utils/ProductFilterd';
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
    return this.client.get<Product>(`${this.API_URL}/get/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.client.post<Product>(`${this.API_URL}/create`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.client.put<Product>(`${this.API_URL}/update`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.client.delete<Product>(`${this.API_URL}/delete/${id}`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.client.get<Product[]>(
      `${this.API_URL}/get-by-category/${category}`
    );
  }

  getProductsFiltered(product: ProductFilter): Observable<Product[]> {
    return this.client.post<Product[]>(`${this.API_URL}/get-filtered`, product);
  }
}
