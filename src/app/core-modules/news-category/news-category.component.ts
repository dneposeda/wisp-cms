import { Component, OnInit } from '@angular/core';
import { NewsCategoryService } from '@app/core-modules/services/news-category.service';
import {Observable} from 'rxjs';
import { NewsCatList } from '@app/core-modules/interfaces/news.cat-list.interface';


@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.scss']
})
export class NewsCategoryComponent implements OnInit {
    public newsCategoryPage;
    public categoriesList: Observable <[NewsCatList]>;
    public newsList;
    public totalItems;
    public currentPage = 1;

  constructor(
        private newsService: NewsCategoryService
      ) { }

  ngOnInit() {
    this.newsService.getNewsPage().subscribe(data => {
        this.newsCategoryPage = data;
   });
    /*this.newsService.getNewsCatList().subscribe(data => {
        this.categoriesList = data;
    });*/
    /**
     * some questions
     */
    this.categoriesList = this.newsService.getNewsCatList();

    this.newsService.getNewsList().subscribe(data => {
        // this.totalNews = data.le;
        this.totalItems = ((Object.keys(data)).length);
        this.newsList = data;
    });

  }
}
