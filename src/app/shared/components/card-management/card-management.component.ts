import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-management',
  templateUrl: './card-management.component.html',
})
export class CardManagementComponent {
  @Input() description: string;
  @Input() icon: string;
  @Input() image: string;
  @Input() redirectTo: string;

  constructor(private router: Router) {
    this.image = '';
    this.icon = '';
    this.description = '';
    this.redirectTo = '';
  }

  onRedirectTo(): void {
    console.info('Redirect to: ', this.redirectTo);
    this.router.navigate([this.redirectTo]);
  }
}
