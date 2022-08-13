import { Animes } from '@core/types/Animes';
import { Clothings } from '@core/types/Clothings';
import { Color } from '@core/types/Color';
import { Size } from '@core/types/Size';

export interface Product {
  id: number;
  description: string;
  price: number;
  image: string;
  likes: number;
  color: Color;
  size: Size;
  typeClothing: Clothings;
  typesAnimes: Animes;
}
