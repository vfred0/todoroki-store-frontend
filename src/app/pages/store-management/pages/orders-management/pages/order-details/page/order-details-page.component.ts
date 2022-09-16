import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from '@core/types/Color';
import { OrderStatus } from '@core/types/OrderStatus';
import { PaymentType } from '@core/types/PaymentType';
import { EarningSummary } from '@core/utils/EarningSummary';
import { OrderDetails } from '@core/utils/OrderDetails';
import { OrderUpdate } from '@core/utils/OrderUpdate';
import { ProductOrdered } from '@core/utils/ProductOrdered';
import { Tag } from '@core/utils/Tag';
import { TagColor } from '@core/utils/TagColor';
import { OrderService } from '@shared/services/order.service';
import { SelectOrderDatesComponent } from '../components/select-order-dates/select-order-dates.component';
import { SelectOrderStatusComponent } from '../components/select-order-status/select-order-status.component';
import { SelectPaymentTypeComponent } from '../components/select-payment-type/select-payment-type.component';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent implements OnInit {
  productOrders: ProductOrdered[];
  orderDetails: OrderDetails;
  orderUpdate: OrderUpdate;
  @ViewChild(SelectPaymentTypeComponent)
  selectPaymentTypeComponent!: SelectPaymentTypeComponent;
  @ViewChild(SelectOrderStatusComponent)
  selectOrderStatusComponent!: SelectOrderStatusComponent;

  @ViewChild(SelectOrderDatesComponent)
  selectOrderDatesComponent!: SelectOrderDatesComponent;
  orderNumber: number;

  namesForOrderDate: string[];
  earningSummaries: EarningSummary[];

  constructor(
    private orderService: OrderService,
    private router: ActivatedRoute
  ) {
    this.earningSummaries = [];
    this.productOrders = [];
    this.orderDetails = {} as OrderDetails;
    this.orderUpdate = {} as OrderUpdate;
    this.orderNumber = this.router.snapshot.params['orderNumber'];
    this.namesForOrderDate = ['orderDate', 'saleDate'];
  }
  ngOnInit(): void {
    this.orderService
      .getDetailsOrderByNumber(this.orderNumber)
      .subscribe(orderDetails => {
        console.log('ORDER DETAILS', orderDetails);
        this.orderDetails = orderDetails;
        this.earningSummaries = orderDetails.earningsSummary;

        this.productOrders = orderDetails.productOrders;

        this.selectPaymentTypeComponent.setOptionSelected(
          this.orderDetails.paymentType
        );
        this.selectOrderStatusComponent.setOptionSelected(
          this.orderDetails.orderStatus
        );

        let orderDatesSelected: Map<string, string> = new Map<string, string>();
        orderDatesSelected.set(
          this.namesForOrderDate[0],
          this.orderDetails.orderDate
        );
        orderDatesSelected.set(
          this.namesForOrderDate[1],
          this.orderDetails.saleDate
        );
        this.selectOrderDatesComponent.setOrderDates(orderDatesSelected);
      });
  }

  setOrderDates(orderDates: Map<string, string>) {
    this.orderUpdate.saleDate = orderDates.get(this.namesForOrderDate[1]) || '';
  }

  setPaymentType(paymentType: PaymentType): void {
    this.orderUpdate.paymentType = paymentType;
  }
  setOrderStatus(orderStatus: OrderStatus): void {
    this.orderUpdate.orderStatus = orderStatus;
  }

  updateOrderDetails() {
    this.orderUpdate.orderNumber = this.orderNumber;
    console.log('UPDATE', this.orderUpdate);
    this.orderService.update(this.orderUpdate).subscribe(() => {
      console.log('UPDATE OK');
    });
  }

  getTotalSummary(key: string): number {
    let totalSummary = new Map<String, number>();
    this.earningSummaries.forEach(earningSummary => {
      earningSummary.colorDetails.reduce((acc, colorDetail) => {
        acc.set(
          colorDetail.color,
          colorDetail.quantity + (acc.get(colorDetail.color) || 0)
        );
        return acc;
      }, totalSummary);
    });
    let total: number = 0;
    totalSummary.forEach((value, key) => {
      total += value;
    });
    totalSummary.set('total', total);
    return totalSummary.get(key) || 0;
  }
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
