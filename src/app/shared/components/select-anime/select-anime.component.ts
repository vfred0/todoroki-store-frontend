import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Animes } from '@core/types/Animes';
import { Option } from '@core/utils/Option';

@Component({
  selector: 'app-select-anime',
  templateUrl: './select-anime.component.html',
})
export class SelectAnimeComponent {
  animeOptions: Array<Option<Animes>>;
  @Output() updateProductsByAnimes: EventEmitter<Animes>;

  constructor() {
    this.animeOptions = [];
    Object.values(Animes).forEach((value: string) =>
      this.animeOptions.push(value)
    );

    this.updateProductsByAnimes = new EventEmitter<Animes>();
  }

  update(optionAnimes: Option<Animes>) {
    this.updateProductsByAnimes.emit(optionAnimes as Animes);
  }
}
