import { Component, Input } from '@angular/core';
import { GoodsCategoryList } from '@app/core-modules/goods/common/interfaces/goods-cat-list.interface';

@Component({
  selector: 'app-side-column',
  templateUrl: './side-column.component.html',
  styleUrls: ['./side-column.component.scss']
})
export class SideColumnComponent {
    @Input()
    list: GoodsCategoryList[];
    constructor() { }
}
