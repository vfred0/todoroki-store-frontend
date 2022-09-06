import { ClothingType } from '@core/types/ClothingType';
import { Color } from '@core/types/Color';
import { Size } from '@core/types/Size';

export interface ProductOrder {
  productId: string;
  color: Color;
  size: Size;
  quantity: number;
  price: number;
  // clothingType?: ClothingType;
}
