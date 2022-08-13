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
  @Input() sizes: Array<Size>;
  @Output() sizeSelected = new EventEmitter<Size>();
  tagSizes: TagSize[];
  constructor() {
    this.sizes = [];
    this.tagSizes = [];
  }
  ngAfterContentInit(): void {
    this.tagSizes = this.sizes.map((size: Size, index: number) => {
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

    this.sizeSelected.emit(
      this.tagSizes.filter((tagSize: TagSize) => tagSize.isSelected)[0]
        .description as Size
    );
  }

  addEventClick() {
    return this.sizes.length > 0;
  }

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
