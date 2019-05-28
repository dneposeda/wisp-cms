import { GoodsItem } from '../common/interfaces/goods-item.interface';

export interface GoodsCategoryPage {
    title: string;
    text: string;
    image: string;
    goods: GoodsItem[];
}
