import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from '@core/models/Sale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  private readonly API_URL = 'http://localhost:8080/api/sale';

  constructor(private client: HttpClient) {}

  getSales(): Observable<Sale[]> {
    return this.client.get<Sale[]>(`${this.API_URL}/get-all`);
  }

  setSales(sale: Sale): void {
    this.client.post<Sale>(`${this.API_URL}/set`, sale).subscribe();
  }
}
