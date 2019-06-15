import { Component, Input,  OnInit } from '@angular/core';
import { NewsItem } from '@app/core-modules/news/commons/interfaces/news-item.interface';
import { BigNewsCard } from '@app/core-modules/fields/big-news-card';

@Component({
  selector: 'app-news-big-card',
  templateUrl: './news-big-card.component.html',
  styleUrls: ['./news-big-card.component.scss']
})
export class NewsBigCardComponent extends BigNewsCard implements OnInit {

    @Input()
    card: NewsItem;

    constructor() {
        super();
    }

    ngOnInit() {
        if (this.card) {
            this.id = this.card.id;
            this.title = this.card.title;
            this.bigImage = this.card.image;
            this.longDescription = this.card.description;
            this.date = this.card.date;
        }
    }
}
