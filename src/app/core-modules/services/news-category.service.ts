import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// interfaces
import { NewsItem } from '@app/core-modules/interfaces/news-item.interface';
import { NewsCategoryPage } from '@app/core-modules/interfaces/news-category-page.interface';
import { NewsCatList } from '@app/core-modules/interfaces/news.cat-list.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsCategoryService {
    private pagePath = '../../../assets/dev-stubs/news-category/news-category-page.stub.json';
    private catListPath = '../../../assets/dev-stubs/news-category/news-cat-list.stub.json';
    private newsListPath = '../../../assets/dev-stubs/news-category/news-list.stub.json';

    constructor( private http: HttpClient ) {}

    public getNewsPage(): Observable<NewsCategoryPage> {
        return this.http.get<NewsCategoryPage>(this.pagePath);
    }
    public getNewsCatList(): Observable<[NewsCatList]> {
        return this.http.get<[NewsCatList]>(this.catListPath);
    }
    public getNewsList(): Observable<[NewsItem]> {
        return this.http.get<[NewsItem]>(this.newsListPath);
    }
}
