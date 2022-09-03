import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Animes } from '@core/types/Animes';
import { Option } from '@core/utils/Option';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-select-anime',
  templateUrl: './select-anime.component.html',
})
export class SelectAnimeComponent extends SelectComponent implements OnInit {
  @Output() updateProductsByAnimes: EventEmitter<Animes>;
  @ViewChild(SelectComponent) selectComponent!: SelectComponent;
  constructor() {
    super();

    Object.values(Animes).forEach((value: string) => this.options.push(value));

    this.updateProductsByAnimes = new EventEmitter<Animes>();
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }

  update(optionAnime: Option<Animes>) {
    this.updateProductsByAnimes.emit(optionAnime as Animes);
  }

  setAnime(anime: Animes) {
    this.selectComponent.setOptionSelected(
      Object.values(Animes)[Object.values(Animes).indexOf(anime)]
    );
  }
}
