import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// interfaces
import { GoodsCategoryPage } from '@app/core-modules/goods/interfaces/goods-cat-page.interface';
import { GoodsCategoryList } from '@app/core-modules/goods/common/interfaces/goods-cat-list.interface';
import { GoodsItem } from '@app/core-modules/goods/common/interfaces/goods-item.interface';


@Injectable({
  providedIn: 'root'
})
export class GoodsCategoryService {
    private folderPath = '../../../assets/dev-stubs/goods-category';
    private pagePath = 'goods-category-page.stub.json';
    private catListPath = 'goods-cat-list.stub.json';

  constructor( private http: HttpClient ) {}

  public getGoodsPage(): Observable<GoodsCategoryPage> {
      return this.http.get<GoodsCategoryPage>(this.folderPath + '/' + this.pagePath );
  }
  public getGoodsCatList(): Observable<GoodsCategoryList> {
      return this.http.get<GoodsCategoryList>(this.folderPath + '/' + this.catListPath);
  }
}
