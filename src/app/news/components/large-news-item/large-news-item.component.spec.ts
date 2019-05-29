import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeNewsItemComponent } from './large-news-item.component';

describe('LargeNewsItemComponent', () => {
  let component: LargeNewsItemComponent;
  let fixture: ComponentFixture<LargeNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
