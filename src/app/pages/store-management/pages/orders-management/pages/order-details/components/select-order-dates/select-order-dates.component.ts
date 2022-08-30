import { Component, OnInit } from '@angular/core';
import { SelectOrderDateComponent } from '../../../order-lists/components/select-order-date/select-order-date.component';

@Component({
  selector: 'app-select-order-dates',
  templateUrl: './select-order-dates.component.html',
})
export class SelectOrderDatesComponent
  extends SelectOrderDateComponent
  implements OnInit
{
  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.formGroup.get(this.MIN_DATE)!.disable();
  }
}
