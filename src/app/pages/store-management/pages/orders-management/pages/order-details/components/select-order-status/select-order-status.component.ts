import {
  Component,
  EventEmitter,
  Input,
  OnInit,
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
export class SelectOrderStatusComponent implements OnInit {
  @ViewChild(SelectComponent) selectOrderStatus!: SelectComponent;
  optionsOrderStatus: Array<Option<OrderStatus>>;
  @Output() updateOrderStatus: EventEmitter<OrderStatus>;
  @Input() orderStatusSelected: OrderStatus;

  constructor() {
    this.optionsOrderStatus = [];
    Object.values(OrderStatus).forEach((value: string) =>
      this.optionsOrderStatus.push(value)
    );
    this.orderStatusSelected = OrderStatus.Sold;
    this.updateOrderStatus = new EventEmitter<OrderStatus>();
  }

  ngOnInit(): void {
    console.log('OPTIONS XX SELECTED', this.orderStatusSelected);
  }

  update(optionAnimes: Option<OrderStatus>) {
    this.updateOrderStatus.emit(optionAnimes as OrderStatus);
  }
}
