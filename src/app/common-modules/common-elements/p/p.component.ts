import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-p',
    templateUrl: './p.component.html',
    styleUrls: ['./p.component.scss']
})
export class PComponent {
    @Input()
    data: string;
    constructor() { }
}
