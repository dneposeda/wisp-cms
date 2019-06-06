import { Component, Input, OnInit } from '@angular/core';
import { NewsItem } from '@app/core-modules/news/commons/interfaces/news-item.interface';
import { MediumNewsCard } from '@app/core-modules/fields/medium-news-card';

@Component({
    selector: 'app-news-medium-card',
    templateUrl: './news-medium-card.component.html',
    styleUrls: ['./news-medium-card.component.scss']
})
export class NewsMediumCardComponent extends MediumNewsCard implements OnInit {
    @Input()
    card: MediumNewsCard;

    constructor() {
        super();
    }

    ngOnInit(): void {
        if (this.card) {
            this.id = this.card.id;
            this.title = this.card.title;
            this.mediumImage = this.card.mediumImage;
            this.description = this.card.description;
            this.date = this.card.date;
        }
    }
}
