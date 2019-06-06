import { Component, Input } from '@angular/core';
import { NewsCategory } from '@app/core-modules/news/commons/interfaces/news-category.interface';

@Component({
    selector: 'app-side-column',
    templateUrl: './side-column.component.html',
    styleUrls: ['./side-column.component.scss']
})
export class SideColumnComponent {
    @Input()
    list: NewsCategory[];
    constructor() { }
}
