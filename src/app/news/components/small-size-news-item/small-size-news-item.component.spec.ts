import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSizeNewsItemComponent } from './small-size-news-item.component';

describe('SmallSizeNewsItemComponent', () => {
    let component: SmallSizeNewsItemComponent;
    let fixture: ComponentFixture<SmallSizeNewsItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SmallSizeNewsItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SmallSizeNewsItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
