import { Component, OnInit } from '@angular/core';
import { Color } from '@core/types/Color';
import { OrderStatus } from '@core/types/OrderStatus';
import { Size } from '@core/types/Size';
import { Tag } from '@core/utils/Tag';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
})
export class OrderCardComponent {
  selectedSizes: Size[];
  selectedColors: Color[];
  constructor() {
    this.selectedSizes = [Size.S, Size.XL];
    this.selectedColors = [Color.White, Color.Black];
  }
  showOrder() {
    console.log('show order');
  }

  getTags(min: number, max: number): Tag[] {
    return [
      {
        description: OrderStatus.Pending,
        pathIcon: '/assets/icons/pending.svg',
      },
      {
        description: 'Ver pedido',
        pathIcon: '/assets/icons/watch.svg',
      },
      {
        description: '60',
        pathIcon: '/assets/icons/cart.svg',
      },
      {
        description: '180',
        pathIcon: '/assets/icons/price.svg',
      },
    ].slice(min, max);
  }
}
