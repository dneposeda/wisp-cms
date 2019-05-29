import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// interfaces
import { NewsCategoryPage } from '@app/core-modules/news/interfaces/news-category-page.interface';
import { NewsCategory } from '@app/core-modules/news/commons/interfaces/news-category.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsCategoryService {
    private apiUrl = 'assets/dev-stubs/news-category';
    private pageUrl = 'news-category-page.stub.json';
    private catList = 'news-cat-list.stub.json';

    constructor( private http: HttpClient ) {}

    public getNewsCatPage(): Observable<NewsCategoryPage> {
        return this.http.get<NewsCategoryPage>(this.apiUrl + '/' + this.pageUrl);
    }
    public getNewsCatList(): Observable<NewsCategory[]> {
        return this.http.get<NewsCategory[]>(this.apiUrl + '/' + this.catList);
    }
}
