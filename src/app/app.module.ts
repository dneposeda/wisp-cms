import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsMainPageComponent } from './news/components/news-main-page/news-main-page.component';
import { MostPopularNewsComponent } from './news/components/most-popular-news/most-popular-news.component';
import { NewsCategoryFeedComponent } from './news/components/news-category-feed/news-category-feed.component';
import { MidSizeNewsItemComponent } from './news/components/mid-size-news-item/mid-size-news-item.component';
import { SmallSizeNewsItemComponent } from './news/components/small-size-news-item/small-size-news-item.component';
import { LargeNewsItemComponent } from './news/components/large-news-item/large-news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsMainPageComponent,
    MostPopularNewsComponent,
    NewsCategoryFeedComponent,
    MidSizeNewsItemComponent,
    SmallSizeNewsItemComponent,
    LargeNewsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
