import { Size } from './Size';
import { Color } from './Color';

export interface ProductItemCart {
  id: number;
  image: string;
  description: string;
  color: Color;
  size: Size;
  price: number;
  quantity: number;
}
