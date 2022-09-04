import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClothingType } from '@core/types/ClothingType';
import { Color } from '@core/types/Color';
import { EarningSummary } from '@core/utils/EarningSummary';
import { Tag } from '@core/utils/Tag';
import { TagColor } from '@core/utils/TagColor';
import { OrderService } from '@shared/services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
})
export class OrdersManagementComponent implements OnInit, OnDestroy {
  earningSummaries: EarningSummary[];
  private subscription: Subscription;
  constructor(private orderService: OrderService) {
    this.earningSummaries = [];
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
          this.earningSummaries = earningSummaries;
        })
    );
  }
  // getTotalSummary(key: string): number {
  //   let totalSummary = new Map<String, Map<String, number>>();
  //   this.earningSummaries.forEach(earningSummary => {
  //     earningSummary.colorDetails.reduce((acc, colorDetail) => {
  //       acc.set(
  //         colorDetail.color,
  //         new Map<String, number>([
  //           [
  //             'quantity',
  //             colorDetail.quantity +
  //               (acc.get(colorDetail.color)?.get('quantity') || 0),
  //           ],
  //           [
  //             'price',
  //             colorDetail.price +
  //               (acc.get(colorDetail.color)?.get('price') || 0),
  //           ],
  //         ])
  //       );
  //       return acc;
  //     }, totalSummary);
  //   });
  //   let total: number = 0;
  //   let total: number = 0;
  //   totalSummary.forEach((key, value) => {
  //     key.forEach((k2, v2) => {
  //       total += key.get('')
  //     });
  //   });
  //   totalSummary.set('total', total);
  //   return totalSummary.get(key) || 0;
  // }
  getColors(): Color[] {
    return Object.values(Color);
  }

  getTagFrom(description: string = '', pathIcon: string = ''): Tag {
    return {
      description,
      pathIcon,
    };
  }

  getTagColorFrom(color: Color): TagColor {
    return {
      typeColor: color,
      isSelected: true,
    };
  }
}
