import { Component, OnInit } from '@angular/core';
import { GoodsCategoryService } from '@app/core-modules/goods/services/goods-category.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GoodsCategory } from '@app/core-modules/goods/common/interfaces/goods-category.interface';

@Component({
    selector: 'app-goods-category',
    templateUrl: './goods-category.component.html',
    styleUrls: ['./goods-category.component.scss']
})
export class GoodsCategoryComponent implements OnInit {

    public goodsCategoryPage: Observable<GoodsCategory>;
    public categoriesList: Observable<GoodsCategory[]>;
    public totalItems;
    public currentPage = 1;

  constructor( private goodsService: GoodsCategoryService ) {}

    ngOnInit() {
        this.categoriesList = this.goodsService.getGoodsCatList();
        this.goodsCategoryPage = this.goodsService.getGoodsPage().pipe(map(data => {
            this.totalItems = (data.goods).length;
            return data;
        }));
    }
}
