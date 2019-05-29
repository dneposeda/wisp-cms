import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './common-modules/main/main.component';
import { NewsCategoryComponent } from './core-modules/news/components/news-category/news-category.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './common-modules/pagination/pagination.component';
import { NewsMediumCardComponent } from './core-modules/news/commons/components/news-medium-card/news-medium-card.component';
import { SideColumnComponent } from './core-modules/news/commons/components/side-column/side-column.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewsCategoryComponent,
    PaginationComponent,
    NewsMediumCardComponent,
    SideColumnComponent
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
