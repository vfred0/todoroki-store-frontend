import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Animes } from '@core/types/Animes';
import { Option } from '@core/utils/Option';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
  formSelect: FormGroup;
  @Output() selectChange: EventEmitter<Option<any>>;
  @Input() options: Array<Option<any>>;
  @Input() optionSelected: Option<any>;
  constructor() {
    this.selectChange = new EventEmitter<Option<any>>();
    this.options = [];
    this.formSelect = new FormGroup({});
    this.optionSelected = {} as Option<any>;
  }

  ngOnInit(): void {
    if (!Object.values(this.options).includes(this.optionSelected)) {
      this.optionSelected = this.options[0];
    }
    if (!this.optionSelected) {
      this.optionSelected = this.options[0];
    }
    this.formSelect = new FormGroup({
      select: new FormControl(this.optionSelected),
    });
    this.formSelect.get('select')!.valueChanges.subscribe(value => {
      this.selectChange.emit(value);
    });
    this.selectChange.emit(this.optionSelected);
  }
  setOptionSelected(option: Option<any>) {
    console.log(this.options, option);
    this.formSelect.setValue({ select: option });
  }
}
