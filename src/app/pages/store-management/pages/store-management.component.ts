import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
})
export class StoreManagementComponent {
  isActiveModalActionsForUser: boolean;

  constructor() {
    this.isActiveModalActionsForUser = false;
  }

  onToggleActionForUser(): void {
    this.isActiveModalActionsForUser = !this.isActiveModalActionsForUser;
  }
}
