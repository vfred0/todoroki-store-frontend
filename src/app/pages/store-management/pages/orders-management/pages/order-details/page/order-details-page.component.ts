import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderStatus } from '@core/types/OrderStatus';
import { PaymentType } from '@core/types/PaymentType';
import { OrderDetails } from '@core/utils/OrderDetails';
import { OrderUpdate } from '@core/utils/OrderUpdate';
import { ProductOrdered } from '@core/utils/ProductOrdered';
import { OrderService } from '@shared/services/order.service';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent implements OnInit {
  productsOrdered: ProductOrdered[];
  orderDetails: OrderDetails;
  orderStatusSelected: OrderStatus = OrderStatus.Sold;

  orderUpdate: OrderUpdate;

  constructor(
    private orderService: OrderService,
    private router: ActivatedRoute
  ) {
    this.productsOrdered = [];
    this.orderDetails = {} as OrderDetails;
    this.orderUpdate = {} as OrderUpdate;
  }
  ngOnInit(): void {
    this.orderService
      .getDetailsOrderByNumber(this.router.snapshot.params['orderNumber'])
      .subscribe(orderDetails => {
        this.orderDetails = orderDetails;
        this.orderStatusSelected = this.orderDetails.orderStatus;
        this.productsOrdered = orderDetails.productsOrdered;
      });
  }

  setOrderDates(orderDates: Map<string, string>) {
    console.log('DATES', orderDates);
    this.orderUpdate.orderDate = orderDates.get('orderDateFrom') || '';
    this.orderUpdate.saleDate = orderDates.get('orderDateTo') || '';
  }

  setPaymentType(paymentType: PaymentType): void {
    this.orderUpdate.paymentType = paymentType;
  }
  setOrderStatus(orderStatus: OrderStatus): void {
    this.orderUpdate.orderStatus = orderStatus;
  }
  updateOrderDetails() {
    console.log('UPDATE', this.orderUpdate);
  }
}
