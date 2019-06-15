import { Component } from '@angular/core';
import { AbstractSidebarComponent } from '../abstract-sidebar.component';

@Component({
  selector: 'app-goods-sidebar',
  templateUrl: './goods-sidebar.component.html',
  styleUrls: ['./goods-sidebar.component.scss']
})
export class GoodsSidebarComponent extends AbstractSidebarComponent {

  constructor() {
      super();
   }
}
