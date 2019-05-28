import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideColumnComponent } from './side-column.component';

describe('SideColumnComponent', () => {
  let component: SideColumnComponent;
  let fixture: ComponentFixture<SideColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
