import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  formSelect: FormGroup;
  @Input() options: Array<string>;

  constructor() {
    this.options = ['Option 1', 'Option 2'];
    this.formSelect = new FormGroup({
      select: new FormControl(this.options[0]),
    });

    // this.formSelect.get('select')!.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
  }
}
