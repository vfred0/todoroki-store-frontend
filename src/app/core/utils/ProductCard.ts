import { Color } from '@core/types/Color';

export interface ProductCard {
  id: string;
  description: string;
  price: number;
  image: string;
  likes: number;
  color: Color;
}
