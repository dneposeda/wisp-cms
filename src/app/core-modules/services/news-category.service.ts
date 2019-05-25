import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsCategory } from '@app/core-modules/interfaces/news-category.interface.ts';
import { Observable, Subject, from, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class NewsCategoryService {
    metadata: NewsCategory;

    constructor( private http: HttpClient ) {
        this.http.get<NewsCategory>('../../../../assets/dev-stubs/news-category.stub.json');
    }
}
