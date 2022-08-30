import { OrderService } from '@shared/services/order.service';
import { OrderCard } from './../../../../../../core/utils/OrderCard';
import { Component, OnInit } from '@angular/core';
import { OrderStatus } from '@core/types/OrderStatus';
import { Size } from '@core/types/Size';

@Component({
  selector: 'app-order-lists',
  templateUrl: './order-lists.component.html',
})
export class OrderListsComponent implements OnInit {
  selectedSizes: Size[];
  orderCards: OrderCard[];
  private orderStatus: OrderStatus;
  private orderDates: Map<string, string>;
  namesForOrderDate: string[];

  constructor(private orderService: OrderService) {
    this.orderStatus = OrderStatus.Pending;
    this.orderDates = new Map<string, string>();
    this.orderCards = [];
    this.selectedSizes = [];
    this.namesForOrderDate = ['orderDateFrom', 'orderDateTo'];
  }
  ngOnInit(): void {
    this.updateOrderCards();
  }
  updateForOrderStatus(orderStatus: OrderStatus) {
    this.orderStatus = orderStatus;
    this.updateOrderCards();
  }
  updateOrderCards() {
    let orderFilter: Map<string, string> = this.orderDates;
    orderFilter.set(
      'orderStatus',
      Object.keys(OrderStatus)[
        Object.values(OrderStatus).indexOf(this.orderStatus)
      ]
    );
    this.orderService
      .getOrdersFiltered(orderFilter)
      .subscribe((orders: OrderCard[]) => {
        console.log(orders);
        this.orderCards = orders;
      });
  }

  updateForOrderDate(orderDates: Map<string, string>) {
    this.orderDates = orderDates;
    this.updateOrderCards();
  }

  // updateProductsByClothingType(option: ClothingType) {
  //   console.log('Option', option);
  // }

  // updateProductsByColor(color: Color) {
  //   console.log('Color', color);
  // }

  // updateProductsByAnimes(option: Animes) {
  //   console.log('Animes', option);
  // }
}
