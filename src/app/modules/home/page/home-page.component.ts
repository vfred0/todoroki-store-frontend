import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation, Parallax } from 'swiper';

SwiperCore.use([Parallax, Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor() {}
}
