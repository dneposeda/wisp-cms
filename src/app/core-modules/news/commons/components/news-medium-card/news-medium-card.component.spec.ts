import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMediumCardComponent } from './news-medium-card.component';

describe('NewsMediumCardComponent', () => {
  let component: NewsMediumCardComponent;
  let fixture: ComponentFixture<NewsMediumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMediumCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMediumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
