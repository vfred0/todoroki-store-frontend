import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
})
export class QuantityComponent {
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();
  public value: FormControl = new FormControl(1);

  decreaseValue() {
    this.value.setValue(this.value.value - 1);
    // this.valueChanged.emit(this.value.va6lue);
  }
  increaseValue() {
    this.value.setValue(this.value.value + 1);
    // this.valueChanged.emit(this.value.value);
  }
}
