import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
/**
 * @description
 * A class representing a view of a small size news component
 *
 * @publicApi
 */
@Component({
    selector: 'wisp-small-size-news-item',
    templateUrl: './small-size-news-item.component.html',
    styleUrls: ['./small-size-news-item.component.scss']
})
export class SmallSizeNewsItemComponent implements OnInit {
    @Input() title;

    constructor() { }

    ngOnInit() {
    }

}
