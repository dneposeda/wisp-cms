import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularNewsComponent } from './most-popular-news.component';

describe('MostPopularNewsComponent', () => {
  let component: MostPopularNewsComponent;
  let fixture: ComponentFixture<MostPopularNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
