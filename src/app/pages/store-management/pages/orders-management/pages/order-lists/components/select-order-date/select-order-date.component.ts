import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-order-date',
  templateUrl: './select-order-date.component.html',
})
export class SelectOrderDateComponent implements OnInit {
  formGroup: FormGroup;
  @Output() filterOrder: EventEmitter<Map<string, string>>;
  constructor() {
    this.filterOrder = new EventEmitter<Map<string, string>>();
    this.formGroup = new FormGroup({
      orderDate: new FormControl(this.getDateNow(), Validators.required),
      saleDate: new FormControl(this.getDateNow(), Validators.required),
    });

    this.formGroup.get('orderDate')!.valueChanges.subscribe(value => {
      this.notifyUpdateOrderDateInterval();
    });
    this.formGroup.get('saleDate')!.valueChanges.subscribe(value => {
      this.notifyUpdateOrderDateInterval();
    });
  }
  ngOnInit(): void {
    this.notifyUpdateOrderDateInterval();
  }
  getDateNow(): string {
    return new Date().toISOString().split('T')[0];
  }

  getFormatDate(date: string): string {
    return new Date(date).toISOString().split('T')[0];
  }

  notifyUpdateOrderDateInterval() {
    this.filterOrder.emit(
      new Map<string, string>([
        [
          'orderDate',
          this.getFormatDate(this.formGroup.get('orderDate')?.value),
        ],
        ['saleDate', this.getFormatDate(this.formGroup.get('saleDate')?.value)],
      ])
    );
  }
}
