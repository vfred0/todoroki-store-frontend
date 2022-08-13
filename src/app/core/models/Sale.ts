import { ProductSaled } from '@core/utils/ProductSaled';

export interface Sale {
  quantity: number;
  price: number;
  prodductsSaled: ProductSaled[];
}
