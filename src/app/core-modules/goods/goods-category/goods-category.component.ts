import { Component, OnInit } from '@angular/core';
import { GoodsCategoryService } from '@app/core-modules/goods/services/goods-category.service';

@Component({
  selector: 'app-goods-category',
  templateUrl: './goods-category.component.html',
  styleUrls: ['./goods-category.component.scss']
})
export class GoodsCategoryComponent implements OnInit {

    public goodsCategoryPage;
    public categoriesList;
    public goodsList;
    public totalItems;
    public currentPage = 1;

  constructor( private feed: GoodsCategoryService ) { }

    ngOnInit() {

        this.feed.getGoodsPage().subscribe(data => {
            this.goodsCategoryPage = data;
        });

        this.feed.getGoodsCatList().subscribe(data => {
            this.categoriesList = data;
        });
        this.feed.getGoodsList().subscribe(data => {
            this.totalItems = ((Object.keys(data)).length);
            this.goodsList = data;
        });
    }
}
