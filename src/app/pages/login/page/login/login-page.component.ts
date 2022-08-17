import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '@core/models/User';
import { UserLogin } from '@core/utils/UserLogin.';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent /* implements OnInit */ {
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
        console.log('El usuario existe: ', exists);
        if (exists) this.userService.setUser(this.formGroup.value.username);
      });
  }
}
