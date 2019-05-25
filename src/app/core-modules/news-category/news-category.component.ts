import { Component, OnInit } from '@angular/core';
import { NewsCategoryService } from '@app/core-modules/services/news-category.service';


@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.scss']
})
export class NewsCategoryComponent implements OnInit {
    public newsCategoryPage;
    public categoriesList;
    public newsList;
    public totalItems;
    public currentPage = 1;

  constructor(
        private news: NewsCategoryService
      ) { }

  ngOnInit() {
    this.news.getNewsPage().subscribe(data => {
        this.newsCategoryPage = data;
   });
    this.news.getNewsCatList().subscribe(data => {
        this.categoriesList = data;
    });
    this.news.getNewsList().subscribe(data => {
        // this.totalNews = data.le;
        this.totalItems = ((Object.keys(data)).length);
        this.newsList = data;
    });
  }
}
