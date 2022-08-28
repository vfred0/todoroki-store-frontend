import { Component, EventEmitter, Output } from '@angular/core';
import { OrderStatus } from '@core/types/OrderStatus';
import { TagOrderStatus } from '@core/utils/TagOrderStatus';

@Component({
  selector: 'app-select-order-status',
  templateUrl: './select-order-status.component.html',
})
export class SelectOrderStatusComponent {
  tags: TagOrderStatus[];
  @Output() orderStatusSelected: EventEmitter<OrderStatus>;
  constructor() {
    this.orderStatusSelected = new EventEmitter<OrderStatus>();
    this.tags = [
      {
        description: OrderStatus.Pending,
        pathIcon: '/assets/icons/pending.svg',
        isSelected: true,
      },
      {
        description: OrderStatus.Sold,
        pathIcon: '/assets/icons/check.svg',
        isSelected: false,
      },
    ];
  }

  selectionOfTag(tag: TagOrderStatus) {
    this.tags = this.tags.map((item: TagOrderStatus) => {
      if (!Object.is(tag, item)) {
        item = { ...item, isSelected: false };
      } else {
        item = { ...item, isSelected: true };
      }
      return item;
    });
    this.orderStatusSelected.emit(tag.description as OrderStatus);
  }
}
