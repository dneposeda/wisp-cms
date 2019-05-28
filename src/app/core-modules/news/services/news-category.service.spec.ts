import { TestBed } from '@angular/core/testing';

import { NewsCategoryService } from './news-category.service';

describe('NewsCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsCategoryService = TestBed.get(NewsCategoryService);
    expect(service).toBeTruthy();
  });
});
