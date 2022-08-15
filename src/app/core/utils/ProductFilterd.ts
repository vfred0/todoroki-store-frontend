import { Animes } from '@core/types/Animes';
import { Clothings } from '@core/types/Clothings';
import { Color } from '@core/types/Color';
import { Size } from '@core/types/Size';

export interface ProductFilter {
  anime: Animes;
  clothing: Clothings;
  color: Color;
  size: Size;
}
