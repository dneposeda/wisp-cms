import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsSidebarComponent } from './goods-sidebar.component';

describe('GoodsSidebarComponent', () => {
  let component: GoodsSidebarComponent;
  let fixture: ComponentFixture<GoodsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
