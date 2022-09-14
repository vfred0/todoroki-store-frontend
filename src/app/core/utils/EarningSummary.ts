import { ClothingType } from '@core/types/ClothingType';
import { ColorDetails } from './ColorDeatails';

export interface EarningSummary {
  clothingType: ClothingType;
  colorDetails: ColorDetails[];
  quantity: number;
  price: number;
}
