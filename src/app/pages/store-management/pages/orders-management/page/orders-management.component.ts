import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClothingType } from '@core/types/ClothingType';
import { EarningSummary } from '@core/utils/EarningSummary';
import { OrderService } from '@shared/services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
})
export class OrdersManagementComponent implements OnInit, OnDestroy {
  earingSummaries: EarningSummary[];
  private subscription: Subscription;
  constructor(private orderService: OrderService) {
    this.earingSummaries = [];
    this.subscription = new Subscription();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.orderService
        .getEarningsSummary()
        .subscribe((earningSummaries: EarningSummary[]) => {
          this.earingSummaries = earningSummaries;
        })
    );
  }

  private getClothingType(_key: string): ClothingType {
    let checkKey = _key.charAt(0).toUpperCase() + _key.slice(1);
    return Object.keys(ClothingType)[
      Object.keys(ClothingType).findIndex(key => key === checkKey)
    ] as ClothingType;
  }
}
