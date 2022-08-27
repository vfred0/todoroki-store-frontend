import { Component, Input } from '@angular/core';
import { ClothingType } from '@core/types/ClothingType';
import { ClothingTypeCard } from '@core/utils/ClothingTypeCard';

@Component({
  selector: 'app-clothing-type-card',
  templateUrl: './clothing-type-card.component.html',
})
export class ClothingTypeCardComponent {
  @Input() clothingTypeCard: ClothingTypeCard;

  constructor() {
    this.clothingTypeCard = {
      name: ClothingType.Sweatshirt,
      quantity: 10,
    };
  }
}
