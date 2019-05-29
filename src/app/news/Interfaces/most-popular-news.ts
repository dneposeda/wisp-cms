import { NewsItem } from './news-item';

/**
 * Defines an object that associates properties with
 * instances of `MostPopularNews`.
 *
 * @publicApi
 */
export interface MostPopularNews {
    content: {
        generalNewsItem: NewsItem,
        newsPreviewFeed: NewsItem[],
    }

}
