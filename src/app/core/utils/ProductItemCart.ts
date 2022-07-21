import { Size } from './Size';
import { TypeColor } from './TypeColor';

export interface ProductItemCart {
  id: number;
  image: string;
  description: string;
  color: TypeColor;
  size: Size;
  price: number;
  quantity: number;
}
