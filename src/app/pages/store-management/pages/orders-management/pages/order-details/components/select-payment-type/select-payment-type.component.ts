import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { PaymentType } from '@core/types/PaymentType';
import { Option } from '@core/utils/Option';
import { SelectComponent } from '@shared/components/select/select.component';

@Component({
  selector: 'app-select-payment-type',
  templateUrl: './select-payment-type.component.html',
})
export class SelectPaymentTypeComponent {
  optionsPaymentType: Array<Option<PaymentType>>;
  @Output() updatePaymentType: EventEmitter<PaymentType>;
  @ViewChild(SelectComponent) selectComponent!: SelectComponent;

  setOptionSelected(paymentType: PaymentType) {
    this.selectComponent.setOptionSelected(
      Object.values(PaymentType)[Object.keys(PaymentType).indexOf(paymentType)]
    );
  }

  constructor() {
    this.optionsPaymentType = [];
    Object.values(PaymentType).forEach((value: string) =>
      this.optionsPaymentType.push(value)
    );
    this.updatePaymentType = new EventEmitter<PaymentType>();
  }

  update(paymentType: Option<PaymentType>) {
    this.updatePaymentType.emit(
      Object.keys(PaymentType)[
        Object.values(PaymentType).indexOf(paymentType as PaymentType)
      ] as PaymentType
    );
  }
}
