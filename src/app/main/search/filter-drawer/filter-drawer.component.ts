import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-filter-drawer',
  templateUrl: './filter-drawer.component.html',
  styleUrls: ['./filter-drawer.component.scss'],
})
export class FilterDrawerComponent implements OnInit {

  Query = '';

  @Input() DrawerHeight;
  @Output() filterClick: EventEmitter<string> = new EventEmitter();
  @Output() closeAll: EventEmitter<> = new EventEmitter();
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  updateInput()  {
    this.searchService.input = this.Query;
  }


  clicked(value: string)  {
    this.filterClick.emit(value);
  }

  emitClosed() {
  }
}
