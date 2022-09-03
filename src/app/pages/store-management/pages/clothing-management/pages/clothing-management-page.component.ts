import { Component, Input } from '@angular/core';
import { ClothingType } from '@core/types/ClothingType';
import { Color } from '@core/types/Color';
import { EarningSummary } from '@core/utils/EarningSummary';
import { Tag } from '@core/utils/Tag';
import { TagColor } from '@core/utils/TagColor';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-clothing-management-page',
  templateUrl: './clothing-management-page.component.html',
})
export class ClothingManagementPageComponent {
  @Input() earningSummaries: EarningSummary[];
  constructor(private productService: ProductService) {
    this.earningSummaries = [];
    this.productService.getClothingSummary().subscribe(data => {
      this.earningSummaries = data;
    });
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

  getTotalSummary(key: string): number {
    let totalSummary = new Map<String, number>();
    this.earningSummaries.forEach(earningSummary => {
      earningSummary.colorDetails.reduce((acc, colorDetail) => {
        acc.set(
          colorDetail.color,
          colorDetail.quantity + (acc.get(colorDetail.color) || 0)
        );
        return acc;
      }, totalSummary);
    });
    let total: number = 0;
    totalSummary.forEach((value, key) => {
      total += value;
    });
    totalSummary.set('total', total);
    return totalSummary.get(key) || 0;
  }
  getColors(): Color[] {
    return Object.values(Color);
  }
}
