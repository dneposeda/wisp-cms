import { Component, Input,  OnInit } from '@angular/core';
import { NewsItem } from '@app/core-modules/news/commons/interfaces/news-item.interface';
import { SmallNewsCard } from '@app/core-modules/fields/small-news-card';

@Component({
  selector: 'app-news-small-card',
  templateUrl: './news-small-card.component.html',
  styleUrls: ['./news-small-card.component.scss']
})
export class NewsSmallCardComponent extends SmallNewsCard implements OnInit {

    @Input()
    card: NewsItem;

    constructor() {
        super();
    }

    ngOnInit() {
        if (this.card) {
            this.id = this.card.id;
            this.title = this.card.title;
            this.smallImage = this.card.image;
            this.shortDesc = this.card.description;
        }
    }

}
