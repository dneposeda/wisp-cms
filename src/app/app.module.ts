import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { ShareBtnComponent } from './components/share-btn/share-btn.component';

@NgModule({
    declarations: [
        AppComponent,
        CommentItemComponent,
        CommentListComponent,
        ShareBtnComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
