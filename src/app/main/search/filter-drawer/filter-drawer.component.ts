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
  ShowRate = false;
  ShowDistance = false;
  ShowType = false;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  updateInput()  {
    this.searchService.input = this.Query;
  }


  clicked(value: string)  {
    this.emitClosed();
    setTimeout(() =>  {
        if (value === 'Bathroom') {
            this.ShowBathroom = true;
        }
        if (value === 'Rate') {
            this.ShowRate = true;
        }
        if (value === 'Distance') {
            this.ShowDistance = true;
        }
        if (value === 'Type')   {
            this.ShowType = true;
        }
        this.filterClick.emit(value);
    }, 500);
  }

  closeDrawer()  {
    this.emitClosed();
  }

  emitClosed() {
    this.closeAll.emit();
    setTimeout(() =>  {
        this.ShowBathroom = false;
        this.ShowRate = false;
        this.ShowDistance = false;
        this.ShowType = false;
    }, 410);
  }
}
