import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
})
export class QuantityComponent {
  @Input() maxValue: number = 5;
  public formInput: FormControl;

  constructor() {
    this.formInput = new FormControl({ value: 1, disabled: true }, [
      Validators.max(this.maxValue),
      Validators.min(1),
    ]);
  }

  decreaseValue() {
    this.formInput.setValue(this.formInput.value - 1);
    if (this.formInput.value < 1) {
      this.formInput.setValue(1);
    }
  }
  increaseValue() {
    this.formInput.setValue(this.formInput.value + 1);
    if (this.formInput.value > this.maxValue) {
      this.formInput.setValue(this.maxValue);
    }
  }

  getValue() {
    return this.formInput.value;
  }
}
