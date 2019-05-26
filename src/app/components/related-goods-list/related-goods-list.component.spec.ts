import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedGoodsListComponent } from './related-goods-list.component';

describe('RelatedGoodsListComponent', () => {
  let component: RelatedGoodsListComponent;
  let fixture: ComponentFixture<RelatedGoodsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedGoodsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedGoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
