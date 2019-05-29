import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    itemsPerSlide: number = 4;
    singleSlideOffset: boolean = true;

    slides = [
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'},
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg'},
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg'},
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg'},
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg'},
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg'},
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg'},
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
        {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'}
    ];
}
