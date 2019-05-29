import { Component, Input } from '@angular/core';
import { GoodsCategory } from '@app/core-modules/goods/common/interfaces/goods-category.interface';

@Component({
    selector: 'app-side-column',
    templateUrl: './side-column.component.html',
    styleUrls: ['./side-column.component.scss']
})
export class SideColumnComponent {
    @Input()
    list: GoodsCategory[];
    constructor() { }
}
