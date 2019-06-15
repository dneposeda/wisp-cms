import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-medium-image',
    templateUrl: './medium-image.component.html',
    styleUrls: ['./medium-image.component.scss']
})
export class MediumImageComponent {
    @Input()
    data: string;
    constructor() { }
}
