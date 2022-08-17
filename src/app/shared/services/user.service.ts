import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models/User';
import { UserLogin } from '@core/utils/UserLogin.';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = 'http://localhost:8080/api/user';
  private user: User;

  constructor(private client: HttpClient) {
    this.user = {} as User;
  }

  getUser(): User {
    return this.user;
  }

  existsAccount(userLogin: UserLogin): Observable<boolean> {
    return this.client.post<boolean>(
      `${this.baseUrl}/existsAccount/`,
      userLogin
    );
  }

  setUser(username: string): void {
    this.client
      .get<User>(`${this.baseUrl}/get-user/${username}`)
      .subscribe(user => {
        this.user = user;
        console.log('El usuario es: ', this.user);
      });
  }

  deleteUser(): void {
    this.user = {} as User;
  }
}
