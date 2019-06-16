import { AbstractGoodsItem } from '@app/core-modules/fields/abstract-good-item';
export interface GoodsCategory {
    id: number;
    title: string;
    goods: AbstractGoodsItem[];
}
