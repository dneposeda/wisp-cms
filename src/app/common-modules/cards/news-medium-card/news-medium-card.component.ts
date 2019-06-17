import { Component, Input } from '@angular/core';
import { AbstractCardComponent } from '../AbstractCardComponent';

@Component({
    selector: 'app-news-medium-card',
    templateUrl: './news-medium-card.component.html',
    styleUrls: ['./news-medium-card.component.scss']
})
export class NewsMediumCardComponent extends AbstractCardComponent {

    constructor() {
        super();
    }
}
