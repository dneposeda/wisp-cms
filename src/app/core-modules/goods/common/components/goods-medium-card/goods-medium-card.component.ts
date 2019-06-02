import { Component, Input, OnInit } from '@angular/core';
import { GoodsMediumCard } from '@app/core-modules/fields/goods/goods-medium-card';

@Component({
    selector: 'app-goods-medium-card',
    templateUrl: './goods-medium-card.component.html',
    styleUrls: ['./goods-medium-card.component.scss']
})
export class GoodsMediumCardComponent extends GoodsMediumCard implements OnInit {
    @Input()
    card: GoodsMediumCard;

    constructor() {
        super();
    }

    ngOnInit(): void {
            this.id = this.card.id;
            this.title = this.card.title;
            this.description = this.card.description;
            this.image = this.card.image;
    }
}
