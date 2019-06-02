import { NewsItem } from '@app/core-modules/news/commons/interfaces/news-item.interface';
import { MediumNewsCard } from '@app/core-modules/fields/medium-news-card';


export interface NewsCategoryPage {
    title: string;
    text: string;
    image: string;
    news: MediumNewsCard[];
}
