import { ProductOrder } from '@core/utils/ProductOrder';

export interface Order {
  quantity: number;
  price: number;
  productOrders: ProductOrder[];
}
