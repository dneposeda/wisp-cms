import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCategoryFeedComponent } from './news-category-feed.component';

describe('NewsCategoryFeedComponent', () => {
  let component: NewsCategoryFeedComponent;
  let fixture: ComponentFixture<NewsCategoryFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCategoryFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCategoryFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
