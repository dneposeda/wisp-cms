import { NewsItem } from './news-item';
/**
 * Defines an object that associates properties with
 * instances of `NewsCategoryFeed`.
 *
 * @publicApi
 */
export interface NewsCategoryFeed {
    categoryName: string,
    content: NewsItem[],
}