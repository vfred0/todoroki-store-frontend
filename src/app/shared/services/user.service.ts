import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models/User';
import { UserLogin } from '@core/utils/UserLogin.';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = 'http://localhost:8080/api/user';

  constructor(private client: HttpClient) {}

  existsAccount(userLogin: UserLogin): Observable<boolean> {
    return this.client.post<boolean>(
      `${this.baseUrl}/existsAccount/`,
      userLogin
    );
  }

  setUser(username: string): void {
    this.client
      .get<User>(`${this.baseUrl}/get-user/${username}`)
      .subscribe((user: User) => {
        localStorage.setItem('username', user.username);
      });
  }

  deleteAuthentication(): void {
    localStorage.removeItem('username');
  }

  existsAuthentication(): Observable<boolean> {
    return this.existsUser(localStorage.getItem('username'));
  }
  existsUser(username: string | null): Observable<boolean> {
    return this.client.get<boolean>(`${this.baseUrl}/exists-user/${username}`);
  }
}
