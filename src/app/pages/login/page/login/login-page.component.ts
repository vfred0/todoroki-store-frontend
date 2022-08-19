import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  formGroup: FormGroup;
  constructor(private userService: UserService) {
    this.formGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  checkAccount() {
    this.userService
      .existsAccount({
        username: this.formGroup.value.username,
        password: this.formGroup.value.password,
      })
      .subscribe((exists: boolean) => {
        if (exists) {
          this.userService.setAuthenticationAndRedirect(
            this.formGroup.value.username
          );
        } else {
          console.log('Error: username or password is incorrect');
        }
      });
  }
}
