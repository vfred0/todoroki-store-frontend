import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '@shared/components/header/components/modal/modal.component';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-modal-actions-for-user',
  templateUrl: './modal-actions-for-user.component.html',
})
export class ModalActionsForUserComponent extends ModalComponent {
  constructor(private userService: UserService) {
    super();
  }
  getUserName(): string {
    return this.userService.getUserName();
  }

  onLogout(): void {
    this.userService.deleteAuthentication();
  }
}
