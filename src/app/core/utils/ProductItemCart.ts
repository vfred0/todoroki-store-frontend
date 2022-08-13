import { Color } from '@core/types/Color';
import { Size } from '@core/types/Size';

export interface ProductItemCart {
  id: string;
  image: string;
  description: string;
  color: Color;
  size: Size;
  price: number;
  quantity: number;
}
