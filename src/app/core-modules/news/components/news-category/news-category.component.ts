import { Component, OnInit } from '@angular/core';
import { NewsCategoryService } from '@app/core-modules/news/services/news-category.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsCategory } from '@app/core-modules/news/commons/interfaces/news-category.interface';
import { NewsCategoryPage } from '@app/core-modules/news/interfaces/news-category-page.interface';

@Component({
    selector: 'app-news-category',
    templateUrl: './news-category.component.html',
    styleUrls: ['./news-category.component.scss']
})
export class NewsCategoryComponent implements OnInit {
    public newsCategoryPage: Observable<NewsCategoryPage>;
    public categoriesList: Observable<NewsCategory[]>;
    public totalItems;
    public currentPage = 1;

    constructor( private newsService: NewsCategoryService ) { }

    ngOnInit() {
        this.categoriesList = this.newsService.getNewsCatList();
        this.newsCategoryPage = this.newsService.getNewsCatPage().pipe(map(data => {
            this.totalItems = ((data.news).length);
            return data;
    }));
  }
}
