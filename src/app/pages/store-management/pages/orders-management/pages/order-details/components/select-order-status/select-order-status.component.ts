import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { OrderStatus } from '@core/types/OrderStatus';
import { Option } from '@core/utils/Option';
import { SelectComponent } from '@shared/components/select/select.component';

@Component({
  selector: 'app-select-order-status',
  templateUrl: './select-order-status.component.html',
})
export class SelectOrderStatusComponent {
  optionsOrderStatus: Array<Option<OrderStatus>>;
  @Output() updateOrderStatus: EventEmitter<OrderStatus>;
  @Input() orderStatusSelected: OrderStatus;
  @ViewChild(SelectComponent) selectComponent!: SelectComponent;

  constructor() {
    this.optionsOrderStatus = [];
    Object.values(OrderStatus).forEach((value: string) =>
      this.optionsOrderStatus.push(value)
    );
    this.orderStatusSelected = {} as OrderStatus;
    this.updateOrderStatus = new EventEmitter<OrderStatus>();
  }

  update(orderStatus: Option<OrderStatus>) {
    this.updateOrderStatus.emit(
      Object.keys(OrderStatus)[
        Object.values(OrderStatus).indexOf(orderStatus as OrderStatus)
      ] as OrderStatus
    );
  }

  setOptionSelected(orderStatus: OrderStatus) {
    this.selectComponent.setOptionSelected(
      Object.values(OrderStatus)[Object.keys(OrderStatus).indexOf(orderStatus)]
    );
  }
}
