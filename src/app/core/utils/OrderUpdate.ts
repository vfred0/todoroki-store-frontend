import { OrderStatus } from '@core/types/OrderStatus';
import { PaymentType } from '@core/types/PaymentType';

export interface OrderUpdate {
  orderStatus: OrderStatus;
  paymentType: PaymentType;
  orderDate: string;
  saleDate: string;
}
