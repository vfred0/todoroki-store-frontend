import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderCard } from '@core/utils/OrderCard';
import { OrderService } from '@shared/services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-search-page',
  templateUrl: './order-search-page.component.html',
})
export class OrderSearchPageComponent implements OnDestroy {
  formGroup: FormGroup;
  orderCards: OrderCard[];
  private subscription: Subscription;

  constructor(private orderService: OrderService) {
    this.subscription = new Subscription();
    this.formGroup = new FormGroup({
      search: new FormControl('', Validators.required),
    });
    this.orderCards = [];
    this.formGroup.valueChanges.subscribe(() => {
      this.formGroup.valid ? this.onSubmit() : null;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.subscription.add(
      this.orderService
        .searchOrderByNumber(this.formGroup.value.search)
        .subscribe((orderCards: OrderCard[]) => {
          this.orderCards = orderCards;
        })
    );
  }

  showEmptyResults(): boolean {
    return this.orderCards.length == 0 && this.formGroup.valid;
  }
}
