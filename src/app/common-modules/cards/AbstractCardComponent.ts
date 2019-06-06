import { Input, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class AbstractCardComponent {

    @Input()
    cardItem;
    constructor() {}
}
