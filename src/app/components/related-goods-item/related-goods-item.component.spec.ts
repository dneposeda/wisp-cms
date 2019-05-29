import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedGoodsItemComponent } from './related-goods-item.component';

describe('RelatedGoodsItemComponent', () => {
    let component: RelatedGoodsItemComponent;
    let fixture: ComponentFixture<RelatedGoodsItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RelatedGoodsItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RelatedGoodsItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
