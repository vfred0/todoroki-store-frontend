import { Component, Input, OnInit } from '@angular/core';
import { ClothingType } from '@core/types/ClothingType';
import { Color } from '@core/types/Color';
import { EarningSummary } from '@core/utils/EarningSummary';
import { Tag } from '@core/utils/Tag';
import { TagColor } from '@core/utils/TagColor';

@Component({
  selector: 'app-earning-summary',
  templateUrl: './earning-summary.component.html',
})
export class EarningSummaryComponent {
  @Input() earningSummaries: EarningSummary[];
  constructor() {
    this.earningSummaries = [];
  }

  getTagFrom(description: string = '', pathIcon: string = ''): Tag {
    return {
      description,
      pathIcon,
    };
  }

  getTagColorFrom(color: Color): TagColor {
    return {
      typeColor: color,
      isSelected: true,
    };
  }

  getDescription(clothingType: ClothingType): string {
    return Object.values(ClothingType)[
      Object.keys(ClothingType).findIndex(key => key === clothingType)
    ];
  }
}
