import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaymentType } from '@core/types/PaymentType';
import { Option } from '@core/utils/Option';

@Component({
  selector: 'app-select-payment-type',
  templateUrl: './select-payment-type.component.html',
})
export class SelectPaymentTypeComponent {
  optionsPaymentType: Array<Option<PaymentType>>;
  @Output() updatePaymentType: EventEmitter<PaymentType>;

  constructor() {
    this.optionsPaymentType = [];
    Object.values(PaymentType).forEach((value: string) =>
      this.optionsPaymentType.push(value)
    );

    this.updatePaymentType = new EventEmitter<PaymentType>();
  }

  update(optionAnimes: Option<PaymentType>) {
    this.updatePaymentType.emit(optionAnimes as PaymentType);
  }
}
