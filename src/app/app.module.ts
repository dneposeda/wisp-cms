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
import { NewsMediumCardComponent } from './common-modules/cards/news-medium-card/news-medium-card.component';
import { NewsSmallCardComponent } from './common-modules/cards/news-small-card/news-small-card.component';
import { NewsBigCardComponent } from './common-modules/cards/news-big-card/news-big-card.component';
import { GoodsMediumCardComponent } from './common-modules/cards/goods-medium-card/goods-medium-card.component';
import { NewsSidebarComponent } from './common-modules/side-bar/news-sidebar/news-sidebar.component';
import { GoodsSidebarComponent } from './common-modules/side-bar/goods-sidebar/goods-sidebar.component';
import { H1Component } from './common-modules/common-elements/headers/h1/h1.component';
import { H2Component } from './common-modules/common-elements/headers/h2/h2.component';
import { H3Component } from './common-modules/common-elements/headers/h3/h3.component';
import { H4Component } from './common-modules/common-elements/headers/h4/h4.component';
import { SmallImageComponent } from './common-modules/images/small-image/small-image.component';
import { MediumImageComponent } from './common-modules/images/medium-image/medium-image.component';
import { BigImageComponent } from './common-modules/images/big-image/big-image.component';
import { PComponent } from './common-modules/common-elements/p/p.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsCategoryComponent,
    PaginationComponent,
    NewsMediumCardComponent,
    NewsSmallCardComponent,
    NewsBigCardComponent,
    GoodsCategoryComponent,
    GoodsMediumCardComponent,
    NewsSidebarComponent,
    GoodsSidebarComponent,
    H1Component,
    H2Component,
    H3Component,
    H4Component,
    SmallImageComponent,
    MediumImageComponent,
    BigImageComponent,
    PComponent
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
