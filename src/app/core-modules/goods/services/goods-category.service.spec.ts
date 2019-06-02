import { TestBed } from '@angular/core/testing';

import { GoodsCategoryService } from './goods-category.service';

describe('GoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodsCategoryService = TestBed.get(GoodsCategoryService);
    expect(service).toBeTruthy();
  });
});
