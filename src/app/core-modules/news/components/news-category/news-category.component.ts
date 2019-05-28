import { Component, OnInit } from '@angular/core';
import { NewsCategoryService } from '@app/core-modules/news/services/news-category.service';
import { BehaviorSubject } from 'rxjs';
import { NewsCatList } from '@app/core-modules/news/commons/interfaces/news.cat-list.interface';
import { NewsCategoryPage } from '@app/core-modules/news/interfaces/news-category-page.interface';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.scss']
})
export class NewsCategoryComponent implements OnInit {
    public newsCategoryPage: BehaviorSubject<NewsCategoryPage> = new BehaviorSubject(null);
    public categoriesList: BehaviorSubject<NewsCatList> = new BehaviorSubject(null);
    public totalItems;
    public currentPage = 1;

  constructor( private newsService: NewsCategoryService ) { }

  ngOnInit() {

    this.newsService.getNewsCatPage().subscribe(data => {
        this.newsCategoryPage.next(data);
        this.totalItems = (Object.keys(data.news)).length;
    });

    this.newsService.getNewsCatList().subscribe(data => {
        this.categoriesList.next(data);
    });
  }
}
