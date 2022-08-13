import { Animes } from '@core/types/Animes';
import { Clothings } from '@core/types/Clothings';
import { Color } from '@core/types/Color';
import { Size } from '@core/types/Size';

export interface ProductFilter {
  size: Size;
  color: Color;
  anime: Animes;
  clothing: Clothings;
}
