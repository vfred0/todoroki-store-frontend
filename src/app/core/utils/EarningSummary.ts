import { ClothingType } from '@core/types/ClothingType';
import { ColorDetails } from './ColorDeatails';

export interface EarningSummary {
  clothingType: ClothingType;
  quantity: number;
  colorDetails: ColorDetails[];
  price: number;
}
