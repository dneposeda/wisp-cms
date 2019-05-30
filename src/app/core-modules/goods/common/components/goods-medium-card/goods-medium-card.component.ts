import { Component, Input } from '@angular/core';
import { GoodsItem } from '@app/core-modules/goods/common/interfaces/goods-item.interface';

@Component({
    selector: 'app-goods-medium-card',
    templateUrl: './goods-medium-card.component.html',
    styleUrls: ['./goods-medium-card.component.scss']
})
export class GoodsMediumCardComponent {
    @Input()
    card: GoodsItem;
    constructor() { }
}
