import { Component } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {


    itemsPerSlide: number = 4;
    singleSlideOffset: boolean = true;
    // private slides: Object[] = [
    //     { image: 'https://via.placeholder.com/900x500/ffc107/343a40' },
    //     { image: 'https://via.placeholder.com/900x500/dc3545/343a40' },
    //     { image: 'https://via.placeholder.com/900x500/28a745/343a40' },
    //     { image: 'https://via.placeholder.com/900x500/17a2b8/343a40' },
    //     { image: 'https://via.placeholder.com/900x500/6610f2/343a40' },
    //     { image: 'https://via.placeholder.com/900x500/dc3545/343a40' },
    //     { image: 'https://via.placeholder.com/900x500/28a745/343a40' },
    //     { image: 'https://via.placeholder.com/900x500/17a2b8/343a40' },
    //     { image: 'https://via.placeholder.com/900x500/6610f2/343a40' },
    //     { image: 'https://via.placeholder.com/900x500/ffc107/343a40' }
    // ];
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
