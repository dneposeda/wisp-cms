import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsCategoryFeed } from '../../Interfaces/news-category-feed';
import { MostPopularNews } from '../../Interfaces/most-popular-news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * @description
 * A class that represents a service providing news manipulation interface
 *
 *
 * @publicApi
 */
export class NewsService {
  newsCategoryUrl = 'assets/news-category-feed.json';
  mostPopularNewsUrl = 'assets/most-popular-news.json';

  constructor(
    private http: HttpClient,
  ) { }
  /**
   * Initiates http request with GET method
   * expecting to receive a news object.
   *
   * @returns {Observable<NewsCategoryFeed>} The news object
   */
  public getNewsCategoryFeed(): Observable<NewsCategoryFeed> {
    return <Observable<NewsCategoryFeed>> this.http.get(this.newsCategoryUrl);
  }
  /**
   * Initiates http request with GET method
   * expecting to receive a news object.
   *
   * @returns {Observable<MostPopularNews>} The news object
   */
  public getMostPopularNews(): Observable<MostPopularNews> {
    return <Observable<MostPopularNews>> this.http.get(this.mostPopularNewsUrl);
  }
}
