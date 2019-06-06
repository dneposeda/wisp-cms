import { Component } from '@angular/core';
import { AbstractCardComponent } from '../AbstractCardComponent';

@Component({
    selector: 'app-news-big-card',
    templateUrl: './news-big-card.component.html',
    styleUrls: ['./news-big-card.component.scss']
})
export class NewsBigCardComponent extends AbstractCardComponent {

    constructor() {
        super();
    }
}
