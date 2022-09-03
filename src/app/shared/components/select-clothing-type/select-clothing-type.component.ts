import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ClothingType } from '@core/types/ClothingType';
import { Option } from '@core/utils/Option';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-select-clothing-type',
  templateUrl: './select-clothing-type.component.html',
})
export class SelectClothingTypeComponent extends SelectComponent {
  @Input() clothingType: ClothingType;
  @Output() clothingTypeChange: EventEmitter<ClothingType>;
  @ViewChild(SelectComponent) selectComponent!: SelectComponent;
  constructor() {
    super();
    this.clothingType = {} as ClothingType;
    this.clothingTypeChange = new EventEmitter<ClothingType>();
    Object.values(ClothingType).forEach((value: string) =>
      this.options.push(value)
    );

    this.clothingTypeChange = new EventEmitter<ClothingType>();
  }
  update(optionClothingType: Option<ClothingType>) {
    this.clothingTypeChange.emit(
      Object.keys(ClothingType)[
        Object.values(ClothingType).indexOf(optionClothingType as ClothingType)
      ] as ClothingType
    );
  }

  setClothingType(clothingType: ClothingType) {
    this.selectComponent.setOptionSelected(
      Object.values(ClothingType)[
        Object.keys(ClothingType).indexOf(clothingType)
      ]
    );
  }
}
