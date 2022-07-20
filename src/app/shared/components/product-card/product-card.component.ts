import { Component, Input } from '@angular/core';
import { Tag } from '@core/utils/Tag';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() productName: string = 'Banana Fxxish';
  @Input() price: number = 13.99;
  @Input() image: string =
    'https://imgs.search.brave.com/V5Y8SJYlqQG79-DGwjAV_qg6RW9G2Jmf8mtWvG6pg4c/rs:fit:861:1200:1/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL2FhaC9t/aWxpdGFyeWJlc3Qv/dS1zLW5hdnktdmll/dG5hbS1kZW5pbS1z/aGlydC0yNS5naWY.gif';
  likes: Tag = {
    description: '150',
    pathIcon: 'assets/icons/heart.svg',
  };
}
