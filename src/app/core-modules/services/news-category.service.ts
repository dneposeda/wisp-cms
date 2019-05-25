import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsCategory } from '@app/core-modules/interfaces/news-category.interface.ts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsCategoryService {

    constructor( private http: HttpClient ) {}

    public getNewsPage(): Observable<any> {
        const jsonPath = '../../../assets/dev-stubs/news-category/news-category-page.stub.json';
        return this.http.get(jsonPath);
    }
    public getNewsCatList(): Observable<any> {
        const jsonPath = '../../../assets/dev-stubs/news-category/news-cat-list.stub.json';
        return this.http.get(jsonPath);
    }
    public getNewsList(): Observable<any> {
        const jsonPath = '../../../assets/dev-stubs/news-category/news-list.stub.json';
        return this.http.get(jsonPath);
    }
}
