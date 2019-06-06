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
import { H1Component } from './common-modules/common-elements/headers/h1/h1.component';
import { H2Component } from './common-modules/common-elements/headers/h2/h2.component';
import { H3Component } from './common-modules/common-elements/headers/h3/h3.component';
import { H4Component } from './common-modules/common-elements/headers/h4/h4.component';

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
    H1Component,
    H2Component,
    H3Component,
    H4Component,
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
