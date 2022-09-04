import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/User';
import { UserLogin } from '@core/utils/UserLogin.';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserName(): string {
    return localStorage.getItem('name') || '';
  }

  private readonly API_URL = `${environment.API_URL}/api/user`;

  constructor(private client: HttpClient, private router: Router) {}

  existsAccount(userLogin: UserLogin): Observable<boolean> {
    return this.client.post<boolean>(
      `${this.API_URL}/existsAccount/`,
      userLogin
    );
  }

  setAuthenticationAndRedirect(username: string): void {
    this.client
      .get<User>(`${this.API_URL}/get-user/${username}`)
      .subscribe((user: User) => {
        localStorage.setItem('name', user.name);
        localStorage.setItem('username', user.username);
        this.router.navigate(['/store-management']);
      });
  }

  deleteAuthentication(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
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
        `${this.API_URL}/exists-user/${localStorage.getItem('username')}`
      )
      .pipe(
        map((exists: boolean) => {
          return exists;
        })
      );
  }
}
