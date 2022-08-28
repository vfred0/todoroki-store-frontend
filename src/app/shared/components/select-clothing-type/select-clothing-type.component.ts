import { Component, EventEmitter, Output } from '@angular/core';
import { Animes } from '@core/types/Animes';
import { ClothingType } from '@core/types/ClothingType';
import { Option } from '@core/utils/Option';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-select-clothing-type',
  templateUrl: './select-clothing-type.component.html',
})
export class SelectClothingTypeComponent {
  clothingType: Option<ClothingType>;
  optionsClothingTypes: Array<Option<ClothingType>>;
  @Output() updateProductsByClothingType: EventEmitter<ClothingType>;
  constructor() {
    this.clothingType = {} as ClothingType;
    this.optionsClothingTypes = [];
    Object.values(ClothingType).forEach((value: string) =>
      this.optionsClothingTypes.push(value)
    );
    this.updateProductsByClothingType = new EventEmitter<ClothingType>();
  }
  update(optionClothingType: Option<ClothingType>) {
    this.updateProductsByClothingType.emit(optionClothingType as ClothingType);
  }
}
