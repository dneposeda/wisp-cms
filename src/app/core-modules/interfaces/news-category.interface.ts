import { NewsItem } from './news-item.interface';

export interface NewsCategory {
    title: string;
    text: string;
    image: string;
    newsList: Array <NewsItem>;
}
