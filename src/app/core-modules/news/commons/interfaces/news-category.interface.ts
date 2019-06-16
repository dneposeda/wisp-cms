import { AbstractNewsItem } from '@app/core-modules/fields/abstract-news-item';
export interface NewsCategory {
    id: number;
    title: string;
    news: AbstractNewsItem[];
}
