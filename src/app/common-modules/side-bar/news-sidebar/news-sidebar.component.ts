import { Component } from '@angular/core';
import { AbstractSidebarComponent } from '../abstract-sidebar.component';

@Component({
  selector: 'app-news-sidebar',
  templateUrl: './news-sidebar.component.html',
  styleUrls: ['./news-sidebar.component.scss']
})
export class NewsSidebarComponent extends AbstractSidebarComponent {

  constructor() {
      super();
   }
}
