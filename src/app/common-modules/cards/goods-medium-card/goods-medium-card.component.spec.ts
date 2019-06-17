import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsMediumCardComponent } from './goods-medium-card.component';

describe('GoodsMediumCardComponent', () => {
  let component: GoodsMediumCardComponent;
  let fixture: ComponentFixture<GoodsMediumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsMediumCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsMediumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
