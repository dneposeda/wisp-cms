import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { ShareBtnComponent } from './components/share-btn/share-btn.component';
import { SharePanelComponent } from './components/share-panel/share-panel.component';
import { WishedItemComponent } from './components/wished-item/wished-item.component';
import { RelatedGoodsItemComponent } from './components/related-goods-item/related-goods-item.component';
import { RelatedGoodsListComponent } from './components/related-goods-list/related-goods-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CommentItemComponent,
        CommentListComponent,
        ShareBtnComponent,
        SharePanelComponent,
        WishedItemComponent,
        RelatedGoodsItemComponent,
        RelatedGoodsListComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
