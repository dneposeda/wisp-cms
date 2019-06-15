import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsCategoryComponent } from './core-modules/news/components/news-category/news-category.component';
import { GoodsCategoryComponent } from './core-modules/goods/goods-category/goods-category.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './common-modules/pagination/pagination.component';
import { NewsMediumCardComponent } from './core-modules/news/commons/components/news-medium-card/news-medium-card.component';
import { NewsSmallCardComponent } from './core-modules/news/commons/components/news-small-card/news-small-card.component';
import { NewsBigCardComponent } from './core-modules/news/commons/components/news-big-card/news-big-card.component';
import { SideColumnComponent } from './core-modules/goods/common/components/side-column/side-column.component';
import { GoodsMediumCardComponent } from './core-modules/goods/common/components/goods-medium-card/goods-medium-card.component';
import { NewsSidebarComponent } from './common-modules/side-bar/news-sidebar/news-sidebar.component';
import { GoodsSidebarComponent } from './common-modules/side-bar/goods-sidebar/goods-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsCategoryComponent,
    PaginationComponent,
    NewsMediumCardComponent,
    SideColumnComponent,
    NewsSmallCardComponent,
    NewsBigCardComponent,
    GoodsCategoryComponent,
    GoodsMediumCardComponent,
    NewsSidebarComponent,
    GoodsSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
