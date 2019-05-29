import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishedItemComponent } from './wished-item.component';

describe('WishedItemComponent', () => {
    let component: WishedItemComponent;
    let fixture: ComponentFixture<WishedItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WishedItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WishedItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
