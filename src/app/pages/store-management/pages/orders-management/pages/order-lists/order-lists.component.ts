import { Component, OnInit } from '@angular/core';
import { OrderStatus } from '@core/types/OrderStatus';

@Component({
  selector: 'app-order-lists',
  templateUrl: './order-lists.component.html',
})
export class OrderListsComponent {
  updateForOrderStatus(orderStatus: OrderStatus) {
    console.log('Estado seleccionado', orderStatus);
  }
  constructor() {}

  updateForOrderDate(orderDates: Map<string, string>) {
    console.log('Fecha seleccionada', orderDates);
  }

  // updateProductsByClothingType(option: ClothingType) {
  //   console.log('Option', option);
  // }

  // updateProductsByColor(color: Color) {
  //   console.log('Color', color);
  // }

  // updateProductsByAnimes(option: Animes) {
  //   console.log('Animes', option);
  // }
}
