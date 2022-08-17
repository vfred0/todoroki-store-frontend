import { Color } from '@core/types/Color';
import { Size } from '@core/types/Size';

export interface ProductSaled {
  productId: string;
  color: Color;
  size: Size;
  quantity: number;
}
