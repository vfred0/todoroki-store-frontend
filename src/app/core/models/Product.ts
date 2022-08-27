import { Animes } from '@core/types/Animes';
import { ClothingType } from '@core/types/ClothingType';
import { Color } from '@core/types/Color';
import { Size } from '@core/types/Size';

export interface Product {
  id: string;
  description: string;
  price: number;
  image: string;
  likes: number;
  color: Color;
  clothingType: ClothingType;
  anime: Animes;
}
