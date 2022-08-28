import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Size } from '@core/types/Size';
import { TagSize } from '@core/utils/TagSize';

@Component({
  selector: 'app-select-size',
  templateUrl: './select-size.component.html',
})
export class SelectSizeComponent implements AfterContentInit {
  // @Input() sizes: Array<Size>;
  @Output() sizeSelected = new EventEmitter<Size>();
  @Input() isSelectable: boolean;
  tagSizes: TagSize[];
  @Input() selectedSizes: Size[];
  constructor() {
    this.selectedSizes = [];
    this.isSelectable = true;
    this.tagSizes = [];
  }
  ngAfterContentInit(): void {
    this.tagSizes = Object.values(Size).map((size: Size, index: number) => {
      let isSelected: boolean = true;
      if (index > 0) {
        isSelected = false;
      }

      return {
        description: size,
        pathIcon: 'assets/icons/size.svg',
        isSelected,
      };
    });

    this.tagSizes = this.tagSizes.map((item: TagSize) => {
      if (this.selectedSizes.includes(item.description as Size)) {
        item.isSelected = true;
      }
      return item;
    });
    // }

    if (this.isSelectable) {
      this.sizeSelected.emit(
        this.tagSizes.filter((tagSize: TagSize) => tagSize.isSelected)[0]
          .description as Size
      );
    }
  }

  // addEventClick() {
  //   return this.tagSizes.length > 1;
  // }

  selectionOfSize(tagSize: TagSize) {
    this.tagSizes = this.tagSizes.map((item: TagSize) => {
      if (!Object.is(tagSize, item)) {
        item = { ...item, isSelected: false };
      } else {
        item = { ...item, isSelected: true };
      }
      return item;
    });
    this.sizeSelected.emit(tagSize.description as Size);
  }
}
