import { Component } from '@angular/core';
import { AbstractCardComponent } from '../AbstractCardComponent';

@Component({
    selector: 'app-news-small-card',
    templateUrl: './news-small-card.component.html',
    styleUrls: ['./news-small-card.component.scss']
})
export class NewsSmallCardComponent extends AbstractCardComponent {

    constructor() {
        super();
    }
}
