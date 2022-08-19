import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/User';
import { UserLogin } from '@core/utils/UserLogin.';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = 'http://localhost:8080/api/user';

  constructor(private client: HttpClient, private router: Router) {}

  existsAccount(userLogin: UserLogin): Observable<boolean> {
    return this.client.post<boolean>(
      `${this.baseUrl}/existsAccount/`,
      userLogin
    );
  }

  setAuthenticationAndRedirect(username: string): void {
    this.client
      .get<User>(`${this.baseUrl}/get-user/${username}`)
      .subscribe((user: User) => {
        localStorage.setItem('username', user.username);
        this.router.navigate(['/clothing-management']);
      });
  }

  deleteAuthentication(): void {
    localStorage.setItem('username', '');

    console.log('delete authentication success');
  }

  existsAuthentication(): Observable<boolean> {
    if (
      localStorage.getItem('username') === '' ||
      localStorage.getItem('username') === null ||
      localStorage.getItem('username') === undefined
    ) {
      return of(false);
    }

    return this.client
      .get<boolean>(
        `${this.baseUrl}/exists-user/${localStorage.getItem('username')}`
      )
      .pipe(
        map((exists: boolean) => {
          return exists;
        })
      );
  }
}
