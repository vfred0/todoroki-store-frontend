import { ClothingType } from '@core/types/ClothingType';
import { ColorDetails } from './ColorDeatails';

export interface EarningSummary {
  clothingType: ClothingType;
  quantity: number;
  colorDetails: ColorDetails[];
  price: number;
}

// {
//   "shirts": {
//     "quantity": 2,
//     "price": 40.00,
//     "white": {
//       "quantity": 2,
//       "price": 40.00
//     },
//     "black": {
//       "quantity": 0,
//       "price": 0
//     }
//   },
//   "sweatshirt": {
//     "price": 1040.00,
//     "quantity": 12,
//     "white": {
//       "quantity": 2,
//       "price": 40.00
//     },
//     "black": {
//       "quantity": 10,
//       "price": 1000.00
//     }
//   }
// }
