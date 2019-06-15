import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent {
    @Input()
    data: string;
    constructor() { }
}
