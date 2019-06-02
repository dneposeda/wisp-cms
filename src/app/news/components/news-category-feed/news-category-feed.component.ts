import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news-service/news.service';
import { NewsCategoryFeed } from '../../Interfaces/news-category-feed';
import { NewsItem } from '../../Interfaces/news-item';

@Component({
    selector: 'app-news-category-feed',
    templateUrl: './news-category-feed.component.html',
    styleUrls: ['./news-category-feed.component.scss']
})
/**
 * @description
 * A class representing a view of a news category feed
 *
 * @publicApi
 */
export class NewsCategoryFeedComponent implements OnInit {
    private categoryName: string;
    private NewsCategoryFeed: NewsItem[];

    constructor(
        private newsService: NewsService,
    ) { }

    ngOnInit() {
        this.getNewsCategoryFeed();
    }
    /**
     * Requests most popular news feed via news service.
     *
     * @async
     */
    private getNewsCategoryFeed(): void {
        this.newsService.getNewsCategoryFeed()
            .subscribe((response: NewsCategoryFeed) => {
                this.destructResponse(response);
        });
    }

    /**
     * Destructs response to local variables .
     *
     * @async
     */
    private destructResponse(response) {
        this.categoryName = response.categoryName;
        this.NewsCategoryFeed = response.content;
    }

}
