import { Component, OnInit, Input } from '@angular/core';
import { NewsItemComponent } from '../news-item/news-item.component';

@Component({
    selector: 'wisp-mid-size-news-item',
    templateUrl: './mid-size-news-item.component.html',
    styleUrls: ['./mid-size-news-item.component.scss']
})
/**
 * @description
 * A class representing a view of a medium size news component
 *
 * @publicApi
 */
export class MidSizeNewsItemComponent implements OnInit {
    @Input() newsItem;

    constructor() { }

    ngOnInit() {
    }

}
