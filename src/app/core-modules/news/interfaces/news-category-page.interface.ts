import { NewsItem } from '@app/core-modules/news/commons/interfaces/news-item.interface';

export interface NewsCategoryPage {
    title: string;
    text: string;
    image: string;
    news: NewsItem[];
}
