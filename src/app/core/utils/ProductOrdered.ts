import { Color } from '@core/types/Color';
import { Size } from '@core/types/Size';

export interface ProductOrdered {
  image: string;
  description: string;
  color: Color;
  size: Size;
  totalPrice: number;
  unitPrice: number;
  quantity: number;
}
