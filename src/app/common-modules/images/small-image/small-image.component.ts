import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-small-image',
    templateUrl: './small-image.component.html',
    styleUrls: ['./small-image.component.scss']
})
export class SmallImageComponent {
    @Input()
    data: string;
    constructor() { }
}
