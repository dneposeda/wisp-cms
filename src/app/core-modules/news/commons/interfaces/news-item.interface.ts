import { NewsCategory } from '@app/core-modules/news/commons/interfaces/news-category.interface';

export interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    category: NewsCategory;
}
