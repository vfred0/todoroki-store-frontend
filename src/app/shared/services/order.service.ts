import { OrderCard } from './../../core/utils/OrderCard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '@core/models/Order';
import { EarningSummary } from '@core/utils/EarningSummary';
import { Observable } from 'rxjs';
import { OrderDetails } from '@core/utils/OrderDetails';
import { OrderUpdate } from '@core/utils/OrderUpdate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly API_URL = `${environment.API_URL}/api/orders`;

  constructor(private client: HttpClient) {}

  save(order: Order) {
    this.client.post<Order>(`${this.API_URL}/save`, order).subscribe();
  }

  searchOrderByNumber(orderNumber: number): Observable<OrderCard[]> {
    return this.client.get<OrderCard[]>(
      `${this.API_URL}/search-order-by-number/${orderNumber}`
    );
  }

  getEarningsSummary(): Observable<EarningSummary[]> {
    return this.client.get<EarningSummary[]>(
      `${this.API_URL}/get-earnings-summary`
    );
  }

  getDetailsOrderByNumber(orderNumber: number): Observable<OrderDetails> {
    return this.client.get<OrderDetails>(
      `${this.API_URL}/get-details-order-by-number/${orderNumber}`
    );
  }
  getOrdersFiltered(orderFilter: Map<string, string>): Observable<OrderCard[]> {
    return this.client.post<OrderCard[]>(
      `${this.API_URL}/get-orders-filtered/`,
      {
        orderDateFrom: orderFilter.get('orderDateFrom'),
        orderStatus: orderFilter.get('orderStatus'),
        orderDateTo: orderFilter.get('orderDateTo'),
      }
    );
  }

  update(orderUpdate: OrderUpdate): Observable<void> {
    return this.client.post<void>(`${this.API_URL}/update/`, orderUpdate);
  }
}
