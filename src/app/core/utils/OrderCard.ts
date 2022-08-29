import { Color } from './../types/Color';
import { Size } from './../types/Size';
import { OrderStatus } from './../types/OrderStatus';
export interface OrderCard {
  orderNumber: number;
  orderStatus: OrderStatus;
  sizes: Size[];
  colors: Color[];
  price: number;
  quantity: number;
}
