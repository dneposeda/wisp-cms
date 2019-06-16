import { MediumNewsCard } from '@app/core-modules/fields/medium-news-card';

export interface NewsCategoryPage {
    title: string;
    text: string;
    news: MediumNewsCard[];
}
