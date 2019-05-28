import { Component, Input } from '@angular/core';
import { NewsItem } from '@app/core-modules/news/commons/interfaces/news-item.interface';

@Component({
  selector: 'app-news-medium-card',
  templateUrl: './news-medium-card.component.html',
  styleUrls: ['./news-medium-card.component.scss']
})
export class NewsMediumCardComponent  {

    @Input()
    card: NewsItem;
  constructor() { }
}
