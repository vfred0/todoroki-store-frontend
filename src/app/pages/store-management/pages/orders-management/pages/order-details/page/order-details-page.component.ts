import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderStatus } from '@core/types/OrderStatus';
import { PaymentType } from '@core/types/PaymentType';
import { OrderDetails } from '@core/utils/OrderDetails';
import { OrderUpdate } from '@core/utils/OrderUpdate';
import { ProductOrdered } from '@core/utils/ProductOrdered';
import { OrderService } from '@shared/services/order.service';
import { SelectOrderDatesComponent } from '../components/select-order-dates/select-order-dates.component';
import { SelectOrderStatusComponent } from '../components/select-order-status/select-order-status.component';
import { SelectPaymentTypeComponent } from '../components/select-payment-type/select-payment-type.component';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent implements OnInit {
  productsOrdered: ProductOrdered[];
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

  constructor(
    private orderService: OrderService,
    private router: ActivatedRoute
  ) {
    this.productsOrdered = [];
    this.orderDetails = {} as OrderDetails;
    this.orderUpdate = {} as OrderUpdate;
    this.orderNumber = this.router.snapshot.params['orderNumber'];
    this.namesForOrderDate = ['orderDate', 'saleDate'];
  }
  ngOnInit(): void {
    this.orderService
      .getDetailsOrderByNumber(this.orderNumber)
      .subscribe(orderDetails => {
        this.orderDetails = orderDetails;
        this.productsOrdered = orderDetails.productsOrdered;
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
}
