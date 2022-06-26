import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation, Parallax } from 'swiper';

SwiperCore.use([Autoplay]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent {
  constructor() {}
}
