import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {PageStateService} from "../../services/page.state.service";

@Component({
  selector: 'app-permit',
  templateUrl: './permit.component.html',
  styleUrls: ['./permit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PermitComponent implements OnInit, OnDestroy {

  constructor(private pageStateService: PageStateService) { }

  ngOnInit() {
    this.pageStateService.Permit = true;
  }

  ngOnDestroy() {
    this.pageStateService.Permit = false;
  }
}
