import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoodsCategory } from '@app/core-modules/interfaces/goods-category.interface.ts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsCategoryService {

  constructor( private http: HttpClient ) {}

  public getGoodsPage(): Observable<any> {
      const jsonPath = '../../../assets/dev-stubs/goods-category/goods-category-page.stub.json';
      return this.http.get(jsonPath);
  }
  public getGoodsCatList(): Observable<any> {
      const jsonPath = '../../../assets/dev-stubs/goods-category/goods-cat-list.stub.json';
      return this.http.get(jsonPath);
  }
  public getGoodsList(): Observable<any> {
      const jsonPath = '../../../assets/dev-stubs/goods-category/goods-list.stub.json';
      return this.http.get(jsonPath);
  }
}
