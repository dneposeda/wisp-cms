import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredItemComponent } from './delivered-item.component';

describe('DeliveredItemComponent', () => {
    let component: DeliveredItemComponent;
    let fixture: ComponentFixture<DeliveredItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeliveredItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeliveredItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
