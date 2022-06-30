import { Component } from '@angular/core';
import { TypeButton } from '@core/utils/TypeButton';

@Component({
  selector: 'app-most-wanted-content',
  templateUrl: './most-wanted-content.component.html',
})
export class MostWantedContentComponent {
  constructor() {}
  typeButton: TypeButton = TypeButton.Default;
}
