import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// interfaces
import { NewsCategoryPage } from '@app/core-modules/news/interfaces/news-category-page.interface';
import { NewsCatList } from '@app/core-modules/news/commons/interfaces/news.cat-list.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsCategoryService {
    private folderPath = 'assets/dev-stubs/news-category';
    private page = 'news-category-page.stub.json';
    private catList = 'news-cat-list.stub.json';

    constructor( private http: HttpClient ) {}

    public getNewsCatPage(): Observable<NewsCategoryPage> {
        return this.http.get<NewsCategoryPage>(this.folderPath + '/' + this.page);
    }
    public getNewsCatList(): Observable<NewsCatList> {
        return this.http.get<NewsCatList>(this.folderPath + '/' + this.catList);
    }
}
