import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-order-date',
  templateUrl: './select-order-date.component.html',
})
export class SelectOrderDateComponent implements OnInit {
  formGroup: FormGroup;
  @Output() updateDateInterval: EventEmitter<Map<string, string>>;
  MIN_DATE: string;
  MAX_DATE: string;
  @Input() namesForOrderDate: string[];
  constructor() {
    this.updateDateInterval = new EventEmitter<Map<string, string>>();
    this.formGroup = new FormGroup({});
    this.namesForOrderDate = [];
    this.MIN_DATE = 'minDate';
    this.MAX_DATE = 'maxDate';
  }
  ngOnInit(): void {
    this.MIN_DATE = this.namesForOrderDate[0];
    this.MAX_DATE = this.namesForOrderDate[1];

    this.formGroup.addControl(
      this.MIN_DATE,
      new FormControl(this.getDateNow(), Validators.required)
    );

    this.formGroup.addControl(
      this.MAX_DATE,
      new FormControl(this.getDateNow(), Validators.required)
    );

    this.formGroup.get(this.MIN_DATE)!.valueChanges.subscribe(() => {
      this.notifyUpdateOrderDateInterval();
    });
    this.formGroup.get(this.MAX_DATE)!.valueChanges.subscribe(() => {
      this.notifyUpdateOrderDateInterval();
    });

    this.notifyUpdateOrderDateInterval();
  }

  setOrderDates(orderDates: Map<string, string>) {
    this.formGroup
      .get(this.MIN_DATE)!
      .setValue(orderDates.get(this.MIN_DATE) || '');
    this.formGroup
      .get(this.MAX_DATE)!
      .setValue(orderDates.get(this.MAX_DATE) || '');
  }

  getDateNow(): string {
    return new Date().toISOString().split('T')[0];
  }

  getFormatDate(date: string): string {
    return new Date(date).toISOString().split('T')[0];
  }

  notifyUpdateOrderDateInterval() {
    let dates = new Map<string, string>([
      [
        this.MIN_DATE,
        this.getFormatDate(this.formGroup.get(this.MIN_DATE)?.value),
      ],
      [
        this.MAX_DATE,
        this.getFormatDate(this.formGroup.get(this.MAX_DATE)?.value),
      ],
    ]);

    this.updateDateInterval.emit(this.checkDates(dates));
  }
  private checkDates(dates: Map<string, string>): Map<string, string> {
    let orderDateFrom = new Date(dates.get(this.MIN_DATE) || '');
    let orderDateTo = new Date(dates.get(this.MAX_DATE) || '');
    if (orderDateFrom > orderDateTo) {
      dates.set(this.MAX_DATE, dates.get(this.MIN_DATE) || '');
      this.formGroup
        .get(this.MAX_DATE)!
        .setValue(dates.get(this.MAX_DATE) || '');
    }
    return dates;
  }
}
