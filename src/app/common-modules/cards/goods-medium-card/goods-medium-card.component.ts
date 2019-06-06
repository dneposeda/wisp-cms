import { Component } from '@angular/core';
import { AbstractCardComponent } from '../AbstractCardComponent';

@Component({
    selector: 'app-goods-medium-card',
    templateUrl: './goods-medium-card.component.html',
    styleUrls: ['./goods-medium-card.component.scss']
})
export class GoodsMediumCardComponent extends AbstractCardComponent {

    constructor() {
       super();
    }
}
