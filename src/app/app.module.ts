import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';

@NgModule({
    declarations: [
        AppComponent,
        CommentItemComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
