import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './common-modules/main/main.component';
import { HeaderComponent } from './common-modules/header/header.component';
import { FooterComponent } from './common-modules/footer/footer.component';
import { GoodsCategoryComponent } from './core-modules/goods/goods-category/goods-category.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './common-modules/pagination/pagination.component';
import { SideColumnComponent } from './core-modules/goods/common/components/side-column/side-column.component';
import { GoodsMediumCardComponent } from './core-modules/goods/common/components/goods-medium-card/goods-medium-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    GoodsCategoryComponent,
    PaginationComponent,
    SideColumnComponent,
    GoodsMediumCardComponent
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
