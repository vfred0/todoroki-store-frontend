import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
})
export class QuantityComponent {
  public value: FormControl = new FormControl(1);

  decreaseValue() {
    this.value.setValue(this.value.value - 1);
  }
  increaseValue() {
    this.value.setValue(this.value.value + 1);
  }
}
