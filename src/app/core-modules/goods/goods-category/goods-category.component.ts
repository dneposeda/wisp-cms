import { Component, OnInit } from '@angular/core';
import { GoodsCategoryService } from '@app/core-modules/goods/services/goods-category.service';
import { BehaviorSubject } from 'rxjs';
import { GoodsCategoryPage } from '@app/core-modules/goods/interfaces/goods-cat-page.interface';
import { GoodsCategoryList } from '@app/core-modules/goods/common/interfaces/goods-cat-list.interface';

@Component({
  selector: 'app-goods-category',
  templateUrl: './goods-category.component.html',
  styleUrls: ['./goods-category.component.scss']
})
export class GoodsCategoryComponent implements OnInit {

    public goodsCategoryPage: BehaviorSubject<GoodsCategoryPage> = new BehaviorSubject(null);
    public categoriesList: BehaviorSubject<GoodsCategoryList> = new BehaviorSubject(null);
    public goodsList;
    public totalItems;
    public currentPage = 1;

  constructor( private goodsService: GoodsCategoryService ) { }

    ngOnInit() {

        this.goodsService.getGoodsPage().subscribe(data => {
            this.goodsCategoryPage.next(data);
            this.totalItems = (Object.keys(data.goods)).length;
        });

        this.goodsService.getGoodsCatList().subscribe(data => {
            this.categoriesList.next(data);
        });
      }
}
