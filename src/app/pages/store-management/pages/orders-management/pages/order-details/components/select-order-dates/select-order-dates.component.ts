import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectOrderDateComponent } from '../../../order-lists/components/select-order-date/select-order-date.component';

@Component({
  selector: 'app-select-order-dates',
  templateUrl: './select-order-dates.component.html',
})
export class SelectOrderDatesComponent extends SelectOrderDateComponent {
  // formGroup: FormGroup;
  // @Output() updateOrderDates: EventEmitter<Map<string, string>>;
  // constructor() {
  //   super();
  //   this.updateOrderDates = new EventEmitter<Map<string, string>>();
  // }
  //   this.filterOrder = new EventEmitter<Map<string, string>>();
  //   this.formGroup = new FormGroup({
  //     orderDate: new FormControl(this.getDateNow(), Validators.required),
  //     saleDate: new FormControl(this.getDateNow(), Validators.required),
  //   });
  //   this.formGroup.get('orderDate')!.valueChanges.subscribe(value => {
  //     this.notifyUpdateOrderDateInterval();
  //   });
  //   this.formGroup.get('saleDate')!.valueChanges.subscribe(value => {
  //     this.notifyUpdateOrderDateInterval();
  //   });
  // }
  // ngOnInit(): void {
  //   this.notifyUpdateOrderDateInterval();
  // }
  // getDateNow(): string {
  //   return new Date().toISOString().split('T')[0];
  // }
  // getFormatDate(date: string): string {
  //   return new Date(date).toISOString().split('T')[0];
  // }
  // notifyUpdateOrderDateInterval() {
  //   this.filterOrder.emit(
  //     new Map<string, string>([
  //       [
  //         'orderDate',
  //         this.getFormatDate(this.formGroup.get('orderDate')?.value),
  //       ],
  //       ['saleDate', this.getFormatDate(this.formGroup.get('saleDate')?.value)],
  //     ])
  //   );
  // }
}
