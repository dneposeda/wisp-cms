import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// interfaces
import { GoodsCategoryPage } from '@app/core-modules/goods/interfaces/goods-cat-page.interface';
import { GoodsCategory } from '@app/core-modules/goods/common/interfaces/goods-category.interface';

@Injectable({
  providedIn: 'root'
})
export class GoodsCategoryService {
    private apiUrl = 'assets/dev-stubs/goods-category';
    private pageUrl = 'goods-category-page.stub.json';
    private catListPath = 'goods-cat-list.stub.json';

  constructor( private http: HttpClient ) {}

  public getGoodsPage(): Observable<GoodsCategoryPage> {
      return this.http.get<GoodsCategoryPage>(this.apiUrl + '/' + this.pageUrl );
  }
  public getGoodsCatList(): Observable<GoodsCategory[]> {
      return this.http.get<GoodsCategory[]>(this.apiUrl + '/' + this.catListPath);
  }
}
