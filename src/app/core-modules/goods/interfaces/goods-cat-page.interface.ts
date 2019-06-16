import { GoodsItem } from '../common/interfaces/goods-item.interface';
import { MediumNewsCard } from '@app/core-modules/fields/medium-goods-card';

export interface GoodsCategoryPage {
    title: string;
    text: string;
    image: string;
    goods: MediumNewsCard[];
}
