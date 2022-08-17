import { Animes } from '@core/types/Animes';
import { ClothingType } from '@core/types/ClothingType';
import { Color } from '@core/types/Color';
import { Size } from '@core/types/Size';

export interface ProductFilter {
  anime: Animes;
  clothingType: ClothingType;
  color: Color;
  size: Size;
  limit: number;
  page: number;
}
