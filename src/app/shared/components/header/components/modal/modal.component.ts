import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: ``,
})
export class ModalComponent {
  @Input() isActive: boolean = false;
  @Output() isActiveChange = new EventEmitter<boolean>();
  constructor() {}
  onToggle(): void {
    this.isActive = !this.isActive;
    this.isActiveChange.emit(this.isActive);
  }
}
