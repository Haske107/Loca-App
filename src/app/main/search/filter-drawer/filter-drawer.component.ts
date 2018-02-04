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
  @Output() closeAll: EventEmitter<any> = new EventEmitter();

  // DISPLAY FILTER VARIABLES
  ShowBathroom = false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  updateInput()  {
    this.searchService.input = this.Query;
  }


  clicked(value: string)  {
    if (value === 'Bathroom') {
      this.ShowBathroom = true;
    }
    this.filterClick.emit(value);
  }

  emitClosed() {
    this.closeAll.emit();
    setTimeout(() =>  {
        this.ShowBathroom = false;
    }, 410)
  }
}
