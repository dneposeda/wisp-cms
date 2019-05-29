import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSizeNewsItemComponent } from './mid-size-news-item.component';

describe('MidSizeNewsItemComponent', () => {
  let component: MidSizeNewsItemComponent;
  let fixture: ComponentFixture<MidSizeNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidSizeNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidSizeNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
