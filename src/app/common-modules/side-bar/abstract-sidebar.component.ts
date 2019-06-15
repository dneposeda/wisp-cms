import { Input, Injectable } from '@angular/core';
import { AbstractItem } from '@app/core-modules/fields/abstract-item';

@Injectable({
    providedIn: 'root'
})
export abstract class AbstractSidebarComponent {

    @Input()
    inputData: AbstractItem;
    @Input()
    slot1: any;
    @Input()
    slot2: any;
}
