import { OrderCard } from '../../../../../../core/utils/OrderCard';
import { Component, Input, OnInit } from '@angular/core';
import { Color } from '@core/types/Color';
import { OrderStatus } from '@core/types/OrderStatus';
import { Size } from '@core/types/Size';
import { Tag } from '@core/utils/Tag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
})
export class OrderCardComponent implements OnInit {
  @Input() orderCard: OrderCard;
  selectedSizes: Size[];
  selectedColors: Color[];
  constructor(private router: Router) {
    this.orderCard = {} as OrderCard;
    this.selectedSizes = [];
    this.selectedColors = [];
  }
  showOrder() {
    this.router.navigate([
      '/store-management/orders-management/order-details',
      this.orderCard.orderNumber,
    ]);
  }
  ngOnInit(): void {
    this.selectedSizes = this.orderCard.sizes;
    this.selectedColors = this.orderCard.colors;
  }
  getOrderStatus(): OrderStatus {
    let orderStatus =
      Object.values(OrderStatus)[
        Object.keys(OrderStatus).indexOf(this.orderCard.orderStatus)
      ];
    return orderStatus;
  }
  getTags(index: number): Tag{
    /* let orderStatus =
      Object.values(OrderStatus)[
        Object.keys(OrderStatus).indexOf(this.orderCard.orderStatus)
      ]; */
    let statusOrder = this.getOrderStatus();
    return [
      {
        description: statusOrder,
        pathIcon: this.getIcon(statusOrder),
      },
      {
        description: 'Ver pedido',
        pathIcon: '/assets/icons/watch.svg',
      },
      {
        description: this.orderCard.quantity.toString(),
        pathIcon: '/assets/icons/cart.svg',
      },
      {
        description: this.orderCard.price.toString(),
        pathIcon: '/assets/icons/pricev2.svg',
      },
    ][index];
  }
  getIcon(orderStatus: OrderStatus): string {
    if (orderStatus == OrderStatus.Sold) {
      return '/assets/icons/check.svg';
    }
    return '/assets/icons/pending.svg';
  }
  getStyles(): string {
    if (this.getOrderStatus() == OrderStatus.Sold) {
      return 'c-order-card__tag-sold';
    } 
    return 'c-order-card__tag-pending';
  }
}
