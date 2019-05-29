import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'wisp-large-news-item',
    templateUrl: './large-news-item.component.html',
    styleUrls: ['./large-news-item.component.scss']
})
export class LargeNewsItemComponent implements OnInit {
    @Input() generalNews;

    constructor() { }

    ngOnInit() {
    }

}
