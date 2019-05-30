import { GoodsCategory } from '@app/core-modules/goods/common/interfaces/goods-category.interface';

export interface GoodsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    category: GoodsCategory;
}
