import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsMainPageComponent } from './news/components/news-main-page/news-main-page.component';
import { NewsItemComponent } from './news/components/news-item/news-item.component';
import { MostPopularNewsComponent } from './news/components/most-popular-news/most-popular-news.component';
import { NewsCategoryFeedComponent } from './news/components/news-category-feed/news-category-feed.component';
import { MidSizeNewsItemComponent } from './news/components/mid-size-news-item/mid-size-news-item.component';
import { SmallSizeNewsItemComponent } from './news/components/small-size-news-item/small-size-news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsMainPageComponent,
    NewsItemComponent,
    MostPopularNewsComponent,
    NewsCategoryFeedComponent,
    MidSizeNewsItemComponent,
    SmallSizeNewsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
