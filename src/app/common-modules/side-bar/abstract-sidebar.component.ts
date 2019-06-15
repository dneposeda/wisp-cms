import { Input, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class AbstractSidebarComponent {

    @Input()
    inputData;
    @Input()
    slot1;
    @Input()
    slot2;
}
