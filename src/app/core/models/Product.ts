import { TypeColor } from '@core/utils/TypeColor';
import { Size } from '@core/utils/Size';
import { TypeAnimes } from './TypeAnimes';
import { TypeClothings } from './TypeClothings';

export interface Product {
  description: string;
  price: number;
  image: string;
  likes: number;
  color: TypeColor;
  size: Size;
  typeClothing: Array<TypeClothings>;
  typesAnimes: Array<TypeAnimes>;
}
