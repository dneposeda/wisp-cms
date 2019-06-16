import { Input, Injectable } from '@angular/core';
import { AbstractItem } from '@app/core-modules/fields/abstract-item';

@Injectable({
    providedIn: 'root'
})
export abstract class AbstractCardComponent {

    @Input()
    cardItem: AbstractItem;
    constructor() {}
}
