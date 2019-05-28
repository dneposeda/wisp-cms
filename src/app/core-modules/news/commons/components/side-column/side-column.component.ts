import { Component, Input } from '@angular/core';
import { NewsCatList } from '@app/core-modules/news/commons/interfaces/news.cat-list.interface';


@Component({
  selector: 'app-side-column',
  templateUrl: './side-column.component.html',
  styleUrls: ['./side-column.component.scss']
})
export class SideColumnComponent {

    @Input()
    list: NewsCatList[];
  constructor() { }
}
