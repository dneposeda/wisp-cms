import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news-service/news.service';
import { MostPopularNews } from '../../Interfaces/most-popular-news';
import { NewsItem } from '../../Interfaces/news-item';

@Component({
    selector: 'wisp-most-popular-news',
    templateUrl: './most-popular-news.component.html',
    styleUrls: ['./most-popular-news.component.scss']
})
export class MostPopularNewsComponent implements OnInit {
    private generalNews: NewsItem;
    private newsPreviewFeed: NewsItem[];

    constructor(
        private newsService: NewsService,
    ) { }

    ngOnInit() {
        this.getMostPopularNews();
    }
    /**
     * Requests most popular news feed via news service.
     *
     * @async
     */
    private getMostPopularNews(): void {
        this.newsService.getMostPopularNews()
            .subscribe((response: MostPopularNews) => {
                this.destructResponse(response);
        });
    }
    /**
     * Destructs response to local variables .
     *
     * @async
     */
    private destructResponse(response) {
        this.generalNews = response.generalNewsItem;
        this.newsPreviewFeed = response.newsPreviewFeed;
    }

}
