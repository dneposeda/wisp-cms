import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-small-size-news-item',
  templateUrl: './small-size-news-item.component.html',
  styleUrls: ['./small-size-news-item.component.scss']
})
export class SmallSizeNewsItemComponent implements OnInit {
  @Input() newsItem;

  constructor() { }

  ngOnInit() {
  }

}
