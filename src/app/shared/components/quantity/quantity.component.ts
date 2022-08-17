import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
})
export class QuantityComponent implements OnInit {
  @Input() maxValue: number = 5;
  @Input() value: number = 5;
  @Output() valueChange = new EventEmitter<number>();
  public formInput: FormControl;

  constructor() {
    this.formInput = new FormControl({});
  }

  ngOnInit(): void {
    if (this.value > this.maxValue) {
      this.value = this.maxValue;
    }
    this.formInput = new FormControl({ value: this.value, disabled: true }, [
      Validators.max(this.maxValue),
      Validators.min(1),
    ]);

    this.formInput.valueChanges.subscribe(value => {
      if (value >= 1 && value <= this.maxValue) {
        this.valueChange.emit(value);
      }
    });
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
    // this.valueChange.emit(this.formInput.value);
  }

  getValue() {
    return this.formInput.value;
  }
}
