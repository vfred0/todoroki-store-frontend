import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Option } from '@core/utils/Option';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
  formSelect: FormGroup;
  @Output() selectChange: EventEmitter<string>;
  @Input() options: Array<Option<any>>;

  constructor() {
    this.selectChange = new EventEmitter<string>();
    this.options = [];
    this.formSelect = new FormGroup({});
  }

  ngOnInit(): void {
    this.formSelect = new FormGroup({
      select: new FormControl(this.options[0]),
    });
    this.formSelect.get('select')!.valueChanges.subscribe(value => {
      this.selectChange.emit(value);
    });
  }
}
