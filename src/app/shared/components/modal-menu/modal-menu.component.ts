import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
})
export class ModalMenuComponent {
  @Input() isActive: boolean = false;
  @Output() isActiveChange = new EventEmitter<boolean>();
  constructor(private router: Router) {}
  onToggle(): void {
    this.isActive = !this.isActive;
    this.isActiveChange.emit(this.isActive);
  }
}
