import { Color } from '@core/utils/Color';
import { Size } from '@core/utils/Size';
import { TypeAnimes } from './TypeAnimes';
import { TypeClothings } from './TypeClothings';

export interface Product {
  id: number;
  description: string;
  price: number;
  image: string;
  likes: number;
  color: Color;
  size: Size;
  typeClothing: TypeClothings;
  typesAnimes: TypeAnimes;
}
