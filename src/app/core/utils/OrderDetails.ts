import { OrderStatus } from '@core/types/OrderStatus';
import { PaymentType } from '@core/types/PaymentType';
import { EarningSummary } from './EarningSummary';
import { ProductOrdered } from './ProductOrdered';

export interface OrderDetails {
  productsOrdered: ProductOrdered[];
  earningsSummary: EarningSummary[];
  saleDate: string;
  orderDate: string;
  orderStatus: OrderStatus;
  paymentType: PaymentType;
}
