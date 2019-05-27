import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { SharePanelComponent } from './components/share-panel/share-panel.component';
import { ShareBtnComponent } from './components/share-btn/share-btn.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { RelatedGoodsListComponent } from './components/related-goods-list/related-goods-list.component';
import { RelatedGoodsItemComponent } from './components/related-goods-item/related-goods-item.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TableParametersComponent } from './components/table-parameters/table-parameters.component';
import { DeliveredItemComponent } from './components/delivered-item/delivered-item.component';
import { WishedItemComponent } from './components/wished-item/wished-item.component';

@NgModule({
    declarations: [
        AppComponent,
        SharePanelComponent,
        ShareBtnComponent,
        CommentItemComponent,
        CommentListComponent,
        RelatedGoodsListComponent,
        RelatedGoodsItemComponent,
        GalleryComponent,
        TableParametersComponent,
        DeliveredItemComponent,
        WishedItemComponent,
    ],
    imports: [
        BrowserModule,
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
